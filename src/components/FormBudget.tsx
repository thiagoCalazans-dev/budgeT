import { RadioGroup } from "@headlessui/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import {  useEffect } from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useFetch } from "../hooks/useFetch";
import { Budget } from "../interface/budget";
import api from "../libs/axios";
import { queryClient } from "../libs/reactQuery";
import { lastday } from "../services/dateFunctions";


interface props {
  selectedData:  Budget
}

const FormBudget = ({selectedData}: props) => { 

  const { register, handleSubmit, control, setValue, reset } = useForm();
  const {useCreate} = useFetch()
  const {createAsync, createLoading} = useCreate(['budgetList'], "entries")
 
   const selectedInputChanges = () => {
    setValue("id", selectedData.id)
    setValue("description", selectedData.description)
    setValue("date", selectedData.date)
    setValue("isPositive", selectedData.isPositive)
    setValue("value", selectedData.value)
    console.log(selectedData)
   }
useEffect(() => {   
  selectedInputChanges()    
  }, [selectedData])


const {mutateAsync: updateAsync, isLoading: updateLoading} = useMutation((data: any) => { 
      return api.patch(`entries?id=eq.${data.id}`, data)}, {
        onSuccess: () => {
        queryClient.invalidateQueries(["budgetList"]);
        reset()
        },
  
      onError: (error: Error) => {
        console.log(error.message)
      }
    },)


const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.id) {
      await updateAsync(data)
        .then(() => {
          console.log("update success");
        })      
        .catch((error: Error) =>console.log(error + "CATCH"));
    } else {
      await createAsync(data)
        .then(() => {
          console.log("insert success");
        })    
        .catch((error: Error) => console.log(error + "CATCH"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="form-control">
        <label htmlFor="id">ID:</label>
        <input placeholder="ex: john doe" {...register("id")} disabled />
        <span></span>
      </div>
      <div className="form-control">
        <label htmlFor="description">Description:</label>
        <input placeholder="ex: john doe" {...register("description")} />
        <span></span>
      </div>
      <div className="form-control">
        <label>Value:</label>
        <input placeholder="ex: 10,00" {...register("value")} />
        <span></span>
      </div>
      <div className="form-control">
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"        
          placeholder="ex: john doe"
          {...register("date")}
        />
        <span></span>
      </div>
      <div className="form-control">
        <Controller
          control={control}
          name="isPositive"
          render={({ field: { onChange, value } }) => (
            <RadioGroup
              className="w-full"
              value={value}
              onChange={(value) => onChange(value)}
            >
              <RadioGroup.Label>Choose one:</RadioGroup.Label>
              <div className="mt-2 gap-2 w-full flex">
                <RadioGroup.Option
                  value={true}
                  className={({ active, checked }) =>
                    `${active && "ring-2 ring-teal-700"}
          ${checked && " ring-2 ring-teal-700"}
            flex justify-center cursor-pointer rounded-lg p-2 shadow-md focus:outline-none flex-1 `
                  }
                >
                  <span>Revenue</span>
                </RadioGroup.Option>
                <RadioGroup.Option
                  value={false}
                  className={({ active, checked }) =>
                    `${active && "ring-2 ring-teal-700"}
          ${checked && " ring-2 ring-teal-700"}
            flex justify-center cursor-pointer rounded-lg p-2 shadow-md focus:outline-none flex-1`
                  }
                >
                  <span>Exchange</span>
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          )}
        />
      </div>
      <button className="w-full md:mt-8 font-semibold text-xl px-4border-0 rounded-lg bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase mt-4 py-6 text-zinc-100">
        {createLoading || updateLoading? "loading" : "register"}  
      </button>     
    </form>
  );
};

export default FormBudget;

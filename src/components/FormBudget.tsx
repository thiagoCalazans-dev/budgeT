import { RadioGroup } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";

interface Bugdet {
  id: Number;
  description: String;
  value: Number;
  date: Date;
  isPositive: Boolean;
}

const FormBudget = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit((e) => onSubmit(e))} className="">
      <div className="form-control">
        <label htmlFor="ID">ID:</label>
        <input placeholder="ex: john doe" {...register("ID")} disabled />
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
          min={`2022-07-01`}
          max={`2022-07-31`}
          placeholder="ex: john doe"
          {...register("date")}
        />
        <span></span>
      </div>
      <div className="form-control">
        <Controller
          control={control}
          name="type"
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
        register
      </button>
    </form>
  );
};

export default FormBudget;
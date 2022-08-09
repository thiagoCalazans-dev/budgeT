import { RadioGroup } from "@headlessui/react";
import type { NextPage } from "next";
import {  Pen, Trash } from "phosphor-react";
import { useState } from "react";
import FormBudget from "../components/FormBudget";

const onSubmit = () => {
  console.log("submitou");
};

const value = -42222.98

const Home: NextPage = () => {
  const [bool, setBool] = useState(true);

  return (
    <main className="min-w-full min-h-full
     md:grid md:grid-cols-3">
      <div className="h-full w-full py-4 md:py-0 flex flex-col items-center justify-center md:justify-start md:border-r border-zinc-300 dark:border-zinc-700">
        <p className="text-teal-700 text-4xl font-bold md:my-8 my-4">
          Monthly Entries
        </p>
        <div className="w-full px-8 max-w-md">
         <FormBudget/>
        </div>
      </div>
      <div className="col-span-2 flex flex-col">     
        <div className="md:p-8 p-2 flex-1 bg-red">
          <div className="w-full shadow-xl border border-zinc-700 rounded-xl overflow-hidden">
            <table className="w-full flex  flex-col table-auto h-1 min-h-[30rem]">
              <thead className=" bg-teal-700">
                <tr className="flex">
                  <th className="text-start pl-2 min-w-[6rem] ">Date</th>
                  <th className="text-start pl-2  min-w-[6rem] flex-1">
                    Description
                  </th>
                  <th className="text-start pl-2  min-w-[6rem] ">Value</th>
                  <th className="text-start pl-2  min-w-[6rem]">Actions</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="flex items-center">
                  <td className="text-start pl-2 ">07/07/2022</td>
                  <td className="text-start pl-2 flex-1">Rent</td>
                  <td className="text-start pl-2 ">800.00</td>
                  <td className="flex gap-1">
                    <button className="flex justify-center py-1 m-1 w-full font-semibold text-xl rounded-full bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase text-zinc-100"><Pen/></button>
                    <button className="flex justify-center py-1 m-1 w-full font-semibold text-xl rounded-full bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase text-zinc-100"><Trash/></button>
                </td>
                </tr>
              </tbody>
            </table>            
          </div>
          <div className="flex justify-end items-center pt-3 gap-2">         
          <div className={`flex min-w-[9rem]  h-auto gap-3 p-2 rounded-xl items-end justify-end border ${value >= 0 ? "bg-teal-700" : "bg-orange-500" } `}>
          <span className="text-xl font-semibold">Total:</span>
          <strong>{value}</strong>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

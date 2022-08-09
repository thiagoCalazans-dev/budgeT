import { Listbox, RadioGroup } from "@headlessui/react";
import type { NextPage } from "next";
import { CaretDown, Pen, Trash } from "phosphor-react";
import { useState } from "react";

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
        <p className="text-teal-700 text-4xl font-bold uppercase md:my-8 my-4">
          Monthly budget
        </p>
        <div className="w-full px-8 max-w-md">
          <form onSubmit={onSubmit} className="">
            <div className="form-control">
              <label htmlFor="description">Description:</label>
              <input placeholder="ex: john doe" />
              <span></span>
            </div>
            <div className="form-control">
              <label>Value:</label>
              <input placeholder="ex: john doe" />
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
              />
              <span></span>
            </div>
            <div className="form-control">
              <RadioGroup className="w-full" value={bool} onChange={setBool}>
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
            </div>
            <button className="w-full md:mt-8 font-semibold text-xl px-4border-0 rounded-lg bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase mt-4 py-6 text-zinc-100">
              register
            </button>
          </form>
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

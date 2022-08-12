import { useRouter } from "next/router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Pen, Trash } from "phosphor-react";
import { InputHTMLAttributes, useState } from "react";
import FormBudget from "../components/FormBudget";
import { Budget } from "../interface/budget";
import api from "../libs/axios";
import { queryClient } from "../libs/reactQuery";
import Navbar from "../components/Navbar";
import { GetAll } from "../services/fetcher";
import { currentMonthAndYear, lastday } from "../services/dateFunctions";

const MonthlyBudget = () => {
  const [date, setDate] = useState<string>("");
  const [selectedData, setSelectedData] = useState({} as Budget);

  const { data: budgetList, error } = useQuery<Budget[], Error>(
    ["budgetList"],
    () => GetAll("entries", "?&order=date")
  );

  const { isLoading: removeLoading, mutateAsync: removeAsync } = useMutation(
    (data: any) => {
      return api.delete(`entries?id=eq.${data.id}`, data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["budgetList"]);
      },

      onError: (error: Error) => {
        console.log(error.message);
      },
    }
  );

  const onChange = (e: any) => {
    setDate(e.target.value);
  };

  const onPenClick = (entry: Budget) => {
    setSelectedData(entry);
    console.log(entry);
  };

  const HandleDeleteClick = async (data: Budget) => {
    await removeAsync(data)
      .then(() => {
        console.log("Grupo removido com sucesso");
      })
      // .then(() => onCloseModal())
      .catch((error: Error) => console.log(error + "CATCH"));
  };

  const filteredMonthValue = budgetList?.filter((item) => {
    let [selectedYear, selectedMonth] = date.split("-");
    let [year, month] = String(item.date).split("-");
    return selectedYear === year && selectedMonth === month;
  });

  const filteredRevenueBudgetList = filteredMonthValue?.filter(
    (item) => item.isPositive === true
  );
  const filteredExchangeBudgetList = filteredMonthValue?.filter(
    (item) => item.isPositive === false
  );

  const TotalRevenue =
    filteredRevenueBudgetList?.length! > 0
      ? filteredRevenueBudgetList
          ?.map((item) => item.value)
          .reduce(function (item, i) {
            return item + i;
          })
      : 0;

  const TotalExchange =
    filteredExchangeBudgetList?.length! > 0
      ? filteredExchangeBudgetList
          ?.map((item) => item.value)
          .reduce(function (item, i) {
            return item + i;
          })
      : 0;

  const balance = (TotalRevenue! - TotalExchange!).toFixed(2);

  return (
    <>
      <Navbar />
      <main
        className="min-w-full min-h-full
     md:grid md:grid-cols-3"
      >
        <div className="h-full w-full py-4 md:py-0 flex flex-col items-center justify-center md:justify-start md:border-r border-zinc-300 dark:border-zinc-700">
          <p className="text-teal-700 text-4xl font-bold md:my-8 my-4">
            Entries
          </p>
          <div className="w-full px-8 max-w-md">
            <FormBudget selectedData={selectedData} />
          </div>
        </div>
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center justify-between flex-col md:flex-row gap-2 md:px-8 p-2">
            <span className="text-xl font-semibold">Select month:</span>
            <input
              type="month"
              onChange={onChange}
              className="text-xl w-auto font-semibold text-orange-500"
            />
          </div>
          <div className="md:px-8 p-2 flex-1">
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
                  {filteredMonthValue?.map((entry) => (
                    <tr key={entry.id} className="flex items-center">
                      <td className="text-start pl-2 ">{String(entry.date)}</td>
                      <td className="text-start pl-2 flex-1">
                        {entry.description}
                      </td>
                      <td
                        className={`text-start pl-2 ${
                          entry.isPositive ? "text-zinc-100" : "text-red-500"
                        }`}
                      >
                        {entry.value}
                      </td>
                      <td className="flex gap-1">
                        <button
                          className="flex justify-center py-1 m-1 w-full font-semibold text-xl rounded-full bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase text-zinc-100"
                          onClick={() => onPenClick(entry)}
                        >
                          <Pen />
                        </button>
                        <button
                          className="flex justify-center py-1 m-1 w-full font-semibold text-xl rounded-full bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase text-zinc-100"
                          onClick={() => HandleDeleteClick(entry)}
                        >
                          <Trash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-3 gap-2">
              <span className="min-w-[9rem] h-auto  p-2 text-xl border rounded-xl w-full bg-teal-700 font-semibold text-center border-zinc-700">{`Revenue: ${TotalRevenue}`}</span>
              <span className="min-w-[9rem] h-auto  p-2 text-xl border rounded-xl w-full bg-red-500 font-semibold text-center border-zinc-700">{`Exchange: ${TotalExchange}`}</span>
              <span className="min-w-[9rem] h-auto  p-2 text-xl border rounded-xl w-full font-semibold text-center border-orange-500">{`Balance: ${balance}`}</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MonthlyBudget;

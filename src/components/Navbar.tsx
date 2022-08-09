import {  Wallet } from "phosphor-react";

const Navbar = () => {
    return ( 
    <header className="flex w-full gap-1 bg-teal-700 min-h-[3rem] items-center justify-between p-4">
    <h1 className="flex  items-end gap-2 text-zinc-100 text-4xl font-bold uppercase cursor-pointer group hover:underline ">
    <Wallet className="group-hover:text-orange-500"/> - Pocket Budget 
    </h1>
    <div className="flex items-center flex-col md:flex-row gap-2">
        <span className="text-xl font-semibold">Current month:</span>
        <span className="text-xl font-semibold text-orange-500">
          07/2022
        </span>
      </div>
  </header>)
}

export default Navbar;
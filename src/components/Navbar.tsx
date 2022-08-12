import { ChangeEventHandler } from "react";
import Image from "next/image";
import { SignOut } from "phosphor-react";
import { useRouter } from "next/router";

const Navbar = () => {

const router = useRouter()

    const onSignOut = () => {
      router.push("/")
    }

    return ( 
    <header className="flex w-full gap-4 bg-teal-700 min-h-[3rem] items-center justify-start px-12 py-4">
    <Image src="/pork.png" alt="me" width="64" height="64" />
    <h1 className="flex-1 text-center text-zinc-100 text-4xl font-bold uppercase">
     Pocket Budget 
    </h1>
    <button onClick={onSignOut} className="flex flex-col items-center hover:text-orange-500"><SignOut size={32}/>Sign out</button>
  
  </header>)
}

export default Navbar;
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col justify-between">     
      <div className="grid grid-cols-3 justify-content flex-1">
          <div className="text-center p-12 col-span-2">
            <Image src="/pork.png" alt="pork" width={400} height={400} />
          </div>
          <div className="flex items-center">
            <div className="border-2 border-teal-700 p-4 rounded-xl flex flex-col gap-2">
              <span className="text-4xl uppercase text-center">Login</span>
              <form>
                <div className="form-control">
                  <label>Username</label>
                  <input />
                </div>
                <div className="form-control">
                  <label>Password</label>
                  <input type="password" />
                </div>
                <button className="w-full font-semibold text-xl px-4 rounded-lg bg-teal-700 disabled:opacity-50 focus:outline-none focus:ring-1 focus:ring-zinc-800 dark:focus:ring-zinc-200  hover:ring-1 hover:ring-zinc-800 dark:hover:ring-zinc-200 hover:opacity-70 hover:transition-all tracking-wide uppercase mt-4 py-6 text-zinc-100">
                  Sign in
                </button>
              </form>
              <div className="flex justify-end">
                <Link href={"/signup"}>
                  <a className="hover:text-orange-500">Sign up</a>
                </Link>
              </div>
            </div>      
          </div>
          </div>      
          <Footer />         
      </main>


    </>
  );
};

export default Home;

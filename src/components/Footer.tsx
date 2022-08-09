import { GithubLogo } from "phosphor-react"

const Footer = () => {
    return ( <footer className="flex w-full gap-1 bg-teal-700 min-h-[7rem] items-center justify-center">
    Check source code at
    <strong className="flex  items-center gap-1 hover:text-orange-500 cursor-pointer">
      Github <GithubLogo />
    </strong>
  </footer>)
}

export default Footer;
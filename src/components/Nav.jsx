import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "./constants"

const Nav = () => {
  return (
    <header className="padding-x py-5 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">   {/* max-container ==     max-width: 1440px;margin: 0 auto; */} 
          <a href="/"><img src={headerLogo} alt="logo" width={130} height={29} /></a>
          <ul className="flex-1 flex  justify-center items-center gap-16 max-lg:hidden">  {/* flex-1 ==> order   max-lg ==> if <1024 then hidden */}
                {navLinks.map((item)=>(
              <li key={item.key}>
                  <a 
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                        {item.label} 
                  </a>
              </li>
                ))}
            </ul>
            <div className="hidden max-lg:block"><img src={hamburger} alt="hamburger_icon" width={25} height={25} /></div>
          </nav>
    </header>
  )
}

export default Nav


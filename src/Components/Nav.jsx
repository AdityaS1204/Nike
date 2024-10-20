import { headerLogo } from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
const Nav = () => {
  return (
    <header className='py-8 padding-x w-full absolute z-10'>
      <nav className='flex justify-between max-container items-center'>
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <ul
          className="flex-1 flex justify-center items-center gap-10 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a 
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
                >
      {item.label}
                </a>
              </li>
              
              ))}

        </ul>
        <div className="hidden max-lg:block">
          <img 
          src={hamburger}
          height={20}
          width={20}
           />
        </div>
      </nav>
    </header>
  )
}

export default Nav;
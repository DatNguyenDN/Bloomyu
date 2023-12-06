import {useEffect,React} from 'react'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { useDarkMode } from '../DarkModeContent'
import {SunIcon, MoonIcon, Icon} from '@chakra-ui/icons'

const Navbar = () => {

  const {darkMode, toggleDarkMode} = useDarkMode();
 

  return (
    <nav id='navbar__container'
       className='z-50 flex items-center h-[84px] w-full px-[2rem] justify-between font-roboto'
    >
      <NavLink to='/'>
        <img
        className='block w-[64px] h-[47px] flex-shrink-1 mr-5'
        src={logo}
        alt='logo'
        />
      </NavLink>
  
     
     <ul id='navlink'
     className='flex text-16  items-center justify-between space-x-9 px-30 mx-30'
     >  
    
        <li> <NavLink to='jobs'>Jobs</NavLink></li>
        <li> <NavLink to='company'>Top Company</NavLink></li>
        <li> <NavLink to='blog'>Blog</NavLink></li>
        <li> <NavLink to='hotjobs'>Hot Jobs</NavLink></li>
        <li> <NavLink to='contact'>Contact</NavLink></li>
     </ul>

     <div className='flex gap-5 items-center justify-end '>
        <button className='h-[45px] w-[120px] rounded-lg bg-yellow-500'>
          Post a Job
        </button>

        <button  className='flex rounded-lg h-[45px] w-[120px] bg-yellow-500 items-center justify-center'
        onClick={toggleDarkMode}>
        {darkMode ? (
          <>
          <MoonIcon/>
            <span className="ml-2">Light Mode</span>
          </>
        ) : (
          <>
          <SunIcon/>
            <span className="ml-2">Dark Mode</span>
          </>
        )}
        </button>
        
        <i className='bx bx-user bx-flip-horizontal text-[40px]' style={{'color':'#ffeb3b'}} ></i>
     </div>

    </nav>
  )
}

export default Navbar

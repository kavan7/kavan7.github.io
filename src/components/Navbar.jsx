
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';

import linkedinLogo from '../assets/linkedin.png'; 
import githubLogo from '../assets/github.png'; 


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `}>
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0,0);
            }}>
            
            <p className="text-white text-[59px] sm:hidden block font-bold cursor-pointer animated-nav">
              K |  <span>A</span></p>
              <p className="text-white text-[40px] sm:block hidden font-bold cursor-pointer animated-nav">
              Kavan<br /><span>Abeyratne</span></p>


            </Link>
            <ul class="flex flex-row font-medium mt-4 space-x-5 mb-3 sm:mb-0 rounded-lg md:flex-row md:space-x-8 space-y-0 md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
              
            <li>
  <a href="https://www.linkedin.com/in/kavanabeyratne/" target="_blank" className="">
    <img src={linkedinLogo} height="500px" width="50px" alt="LinkedIn" />
  </a>
</li>
<li>
  <a href="https://github.com/kavan7" target="_blank"  className="">
    <img src={githubLogo} height="50px" width="50px" alt="GitHub" />
  </a>
</li>

            </ul>
            </div>
   
     



            
          
    

    </nav>
    
  )
}

export default Navbar;



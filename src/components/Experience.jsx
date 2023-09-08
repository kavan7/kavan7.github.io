import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { styles } from "../styles";
import {fadeIn, textVariant} from '../utils/motion';
import { HubbleCard } from "./hubblecard";
import { SectionWrapper } from "../hoc";
import { projects, services} from '../constants';
import styled from "styled-components";

import '../index.css'
import { GuitarifyCard } from "./guitarifycard";
import { LibreCard } from "./librecard";



const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ServiceCard = ({index, title, subtitle}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className='w-full  p-[3px] rounded-[20px] shadow-card'>

<motion.div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">

    <div class="p-5">
      
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{title}</h5>
      
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
        <a href="https://home.edx.org/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-tertiary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-secondary dark:hover:bg-tertiary dark:focus:ring-blue-800 ">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</motion.div>

      </motion.div>

    </Tilt>
  )
}


const Experience = () => {



  return (
    <>
    <motion.div variants={textVariant()}>
      
      <h2 className={`${styles.sectionHeadText}  animated `}>Portfolio.</h2>
      <motion.div variants={textVariant()}>
    <motion.h2 variants={fadeIn("", "", 0.1, 0.5)} className={`${styles.sectionSubText} animated-sub gap-10 mt-4`}>
    Courses



    </motion.h2>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={1} {...service} />
      ))}


    </div>
    </motion.div>
   
      <motion.h2 variants={fadeIn("", "",0.1, 0.5)} className={`${styles.sectionSubText} gap-10 mt-10 flex  animated-sub`}>
      Projects
    </motion.h2>  






    
    </motion.div>


 

    </>
  )
}

export default SectionWrapper(Experience, "experience");

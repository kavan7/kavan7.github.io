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
      <motion.h2 variants={fadeIn("", "",0.1, 0.5)} className={`${styles.sectionSubText} gap-10 mt-10 animated-sub`}>
      Projects
    </motion.h2>  
    
    <div className="mt-5">
    <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block" type="button">
  <HubbleCard />
</button>

<div id="defaultModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Terms of Service
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
          
            <div class="p-6 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p>
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                </p>
            </div>
            
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
    
    </div>



    
    </motion.div>
 
    <motion.h2 variants={fadeIn("", "", 0.1, 1)} className={`${styles.sectionSubText} animated-sub gap-10 mt-4`}>
    Courses



    </motion.h2>

    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={1} {...service} />
      ))}


    </div>
     
   
 

    </>
  )
}

export default SectionWrapper(Experience, "experience");

import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import '../index.css';

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { LoopPingPong } from "three";
const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Hi, welcome.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {  
      setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 65);
    }
  }, [index, fullText]);


  return (
    <section className="relative w-full h-screen mx-auto">
      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[120px] sm:top-[185px] max-w-7xl mx-0 flex flex-row items-start gap-3 sm:gap-10 `}>
        <div className="flex flex-col justify-center items-center ml-0 mt-5">
          <div className="w-8 h-8 rounded-full bg-secondary ml-0 "/>
          <div className="w-1 sm:h-80 h-40 violet-gradient ml-0" />
          
        
        </div>
      <div className="">
      <span className={`${styles.sectionSubText} animated-nav`}><br />This website is still under development</span>
         <h1 className={`${styles.heroHeadText} mt-12 text-[#fffff] `}>{text}</h1>
         <p className={`${styles.heroSubText}  text-gray-100 fade-in textShadowColor: '#ffffff',
      mt-16 ml-0 `}>I'm a Grade 11 student <br className="sm:block hidden " />with a keen interest in developing web applications,<br className="sm:block hidden" />integrating with machine learning and much more.</p>
        
          
      </div>
    
      

      </motion.div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full mb-16 flex justify-center ">
        <motion.div
        animate={{
          y: [-40,-90, -40]
        }}
        transition={{
          duration: 1.5, 
          repeat : Infinity,
          repeatType: LoopPingPong
        }}>
         
        
        <a href="#experience" className="font-black text-white lg:text-[180px] sm:text-[100px] xs:text-[150px] text-[140px] lg:leading-[198px] mt-2">
        <svg data-accordion-icon class="w-16 h-10 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
        </a>
                <a href="#experience" className={`mt-14 ${styles.heroHeadText}`}>
        <svg data-accordion-icon class="w-16 h-10 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
        </a>
        </motion.div>
        </div>

    </section>
    
  )
}

export default SectionWrapper(Hero, '');
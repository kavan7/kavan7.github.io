import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import '../index.css';
import { Link } from "react-router-dom";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

import { LoopPingPong } from "three";
const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Hi, welcome.");
  const [index, setIndex] = useState(0);

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    if (index < fullText.length) {  
      setTimeout(() => {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 65);
    }
  }, [index, fullText]);


  return (
    <section className="relative w-full h-[480px] sm:h-[650px] mx-auto">
      <motion.div variants={textVariant()} className={`${styles.paddingX} absolute inset-0 top-[40px] sm:top-[40px] max-w-7xl mx-0 flex flex-row items-start gap-3 sm:gap-10 `}>
        <div className="flex flex-col justify-center items-center ml-0 mt-5">
          <div className="w-8 h-8 rounded-full bg-secondary ml-0 "/>
          <div className="w-1 sm:h-80 h-40 violet-gradient ml-0" />
          
        
        </div>
      <div className="">
      <span className={`${styles.sectionSubText} animated-nav`}><br />This website is still in its early stages of development</span>
         <h1 className={`${styles.heroHeadText} sm:mt-16 mt-4  text-[#fffff] `}>{text}</h1>
         <p className={`${styles.heroSubText}  text-gray-100 fade-in textShadowColor: '#ffffff',
      mt-16 ml-0 `}>I'm a Grade 11 student <br className="sm:block hidden " />with a keen interest in developing web applications,<br className="sm:block hidden" />integrating with machine learning and much more.<br  /></p>
         
      </div>
    
      

      </motion.div>
      
      <div className="absolute xs:bottom-2 xs:top-39 bottom-32 w-full flex justify-center ">
        <motion.div
        animate={{
          y: [-40,-90, -40]
        }}
        transition={{
          duration: 1.5, 
          repeat : Infinity,
          repeatType: LoopPingPong
        }} >
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0,800);
            }}>          
                 
            <svg data-accordion-icon class=" sm:block hidden w-10 rotate-180 shrink-0 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
      </Link>
      <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0,800);
            }}>    
        <svg data-accordion-icon class="sm:block hidden  w-10  rotate-180 shrink-53" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
      </Link>
      
        
        </motion.div>
        </div>

    </section>
    
  )
}

export default SectionWrapper(Hero, '');
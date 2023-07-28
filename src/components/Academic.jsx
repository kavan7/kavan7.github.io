import React from 'react';
import { Tilt } from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc'


import {fadeIn, textVariant} from '../utils/motion';



const Academic = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={`${styles.sectionHeadText} mt-15 animated`}>
            Highschool - Martingrove Collegiate.
          </h2>


<motion.div className={`${styles.heroSubText} bg-transparent rounded-3xl   mt-10 p-1`}>
<Tilt>


<motion.div class="shadow-card border  border-gray-200 rounded-3xl bg-transparent  shadow dark:bg-transparent dark:border-gray-700">
<div class="w-full max-w-screen-2xl mx-auto]">
            
 <motion.p variants={fadeIn("", "", 0.1, 1)}
       className="mt-3 text-white rounded-3xl ml-8 mt-8 mb-10 mr-8 text-[20px] max-w-3xl  ">
         I am actively involved in various clubs, each offering unique experiences.
         In Band, I explore music creatively. Hosa enhances my knowledge in healthcare,
           while Deca nurtures my business skills. As part of SAC, I contribute to school events. 
           The Music Council elevates the musical atmosphere. Ultimate Frisbee and Basketball foster 
           teamwork and sportsmanship. In Leadership, I inspire positive change. These clubs enrich 
           my high school journey in remarkable ways.
           </motion.p>
     

       </div>
       
 </motion.div>
 
 </Tilt>
          <p className={`${styles.sectionSubText} animated-sub mt-20 `}>
            Clubs
          </p> 
    </motion.div>



        </motion.div>



    </>
  )
  
}

export default SectionWrapper(Academic, 'Academic');


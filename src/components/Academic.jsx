import React from 'react';
import { Tilt } from 'react-tilt';
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


<motion.div class="shadow-card border  border-gray-200 rounded-3xl bg-transparent  shadow dark:bg-transparent dark:border-gray-700">
<div class="w-full max-w-screen-2xl mx-auto]">
            

     

       </div>
       
 </motion.div>
 

          <p className={`${styles.sectionSubText} animated-sub mt-20 `}>
            Clubs
            </p> 
        
            <p className={`${styles.sectionSubText} text-white animated font-black`}>DECA</p>

          
    </motion.div>


   
    
        </motion.div>



    </>
  )
  
}

export default SectionWrapper(Academic, 'Academic');


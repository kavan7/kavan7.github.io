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
const Hobbies = () => {
  return (
     
    <div>
          <div className="mb-16">
      <LibreCard />   
   </div>
 
      
      <div className="mb-16">
      <GuitarifyCard />   
    </div>
    <div className="mb-16">
      <HubbleCard /> 
      </div>  
      <motion.h2 variants={fadeIn("", "",0.1, 0.5)} className={`${styles.sectionSubText}  gap-10 mt-10 flex flex-wrap animated-sub`}>
      Projects
    </motion.h2>  
      </div>
  )
}

export default Hobbies
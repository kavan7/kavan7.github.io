import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";




  const Extracurricular = () => {
    return (
      <>
        
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} mt-15 animated`}>
            Extracurriculars.
          </h2>
          <p className={`${styles.sectionSubText} animated-sub mt-10 indent-3`}>
            Sports
          </p> 
          
          
      
        </motion.div>
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} animated-sub mt-10 indent-3`}>
            Music
        
          </p> 
          </motion.div>
          <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} animated-sub mt-10 indent-3`}>
            Organizations
          </p> 
          </motion.div>
      
      </>
    );
  };
export default SectionWrapper(Extracurricular, 'Extracurricular');
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const CommunityCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#ddebe0", color: "" }}
    contentArrowStyle={{ borderRight: "7px solid #23261" }}
    iconStyle={{ background: experience.iconBg }}
    className={"rounded-3xl  "}
  >
    <h3 className="mb-2 ml-0 text-2xl font-bold tracking-tight text-darktext shadow-card dark:text-white">
      {experience.title}
    </h3>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
      {experience.company_name}
    </p>
    <p className="text-primary text-secondary">{experience.date}</p>
  </VerticalTimelineElement>
);

const Community = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-15 animated`}>
          Community.
        </h2>
        <p className={`${styles.sectionSubText} animated-sub mt-10 indent-3`}>
          Volunteering
        </p>

        <div className="mt-18 flex flex-col mt-20 flex flex-wrap gap-10  rounded-3xl">
          <VerticalTimeline>
           
              {experiences.map((experience, index) => (
                <CommunityCard key={index} experience={experience} />
              ))}
            
          </VerticalTimeline>
        </div>
      </motion.div>
    </>
  );
};
export default SectionWrapper(Community, "community");

import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const ServiceCard = (key) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * key.index, 0.75)} className="w-full p-[1px] rounded-[20px]">
        {/* eslint-disable-next-line react/no-unknown-property */}
          <img src={key.icon} alt={key.title} className="w-50 object-contain" />
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[#94c72c]">Introduction</p>
        <h2 className={styles.sectionHeadText}>Hello.</h2>
      </motion.div>

      <motion.p className="text-[#1e82fd]" varient={fadeIn("right", "spring", 0.1, 1)}>
        For many years I’ve been the only woman in rooms full of men. As a fashion model or when studying computer science, working on AI projects at Frauenhofer and the future of media at Axel Springer. It taught me a valuable lesson: To drive change, you have to lead by example. That’s why I founded my own startup right after graduating.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")

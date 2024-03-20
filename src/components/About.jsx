import React from 'react'
// import Tilt from 'react-tilt';
import {motion} from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard=({index,title,icon})=>{
return(
  <p>{service.title}</p>
)
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I'm Mohini Mehta, a passionate and creative web developer from Pimpri Chinchwad College of Engineering. I specialize in web development and app development, with a strong focus on creating user-friendly and visually appealing websites.

My journey into the world of web development began at Pimpri Chinchwad College of Engineering, where I discovered my love for coding and design. Since then, I have been on a continuous learning journey, exploring various technologies and honing my skills to deliver high-quality solutions.

Some of my key skills include HTML, CSS, JavaScript, and Flutter. I enjoy the process of turning concepts into reality through the power of code. Whether it's crafting a seamless user interface or developing innovative applications, I am always excited about taking on new challenges.
 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index)=>{
        <ServiceCard key={service.title} index={index} {...service}/>
      })}
    </div>
    </>
  )
}

export default About
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { TextGenerateEffect} from "./ui/textgen"
 
const words = `  I'm a full stack developer with a passion for crafting innovative solutions and bringing ideas to life. With a solid foundation in both front-end and back-end technologies, I thrive on tackling complex challenges and creating seamless user experiences.Over the years I've backed skills of Graphic designing on platforms like canva, Adobe photoshop and many more. Whether it's building responsive web applications, designing intuitive user interfaces, or optimizing database performance, I'm dedicated to delivering high-quality solutions that exceed expectations.
`;
export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <TextGenerateEffect words={words} />
  
    </motion.section>
  );
}

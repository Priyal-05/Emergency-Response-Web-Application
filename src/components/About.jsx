import React from "react";
import { motion } from "framer-motion";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <motion.div 
      className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.0 }}
      viewport={{ once: true }}
    >
      {/* Text Section */}
      <motion.div 
        className="w-full lg:w-3/4 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-semibold text-center lg:text-start drop-shadow-lg">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-justify lg:text-start leading-relaxed">
          Welcome to <strong>MedResQ</strong>, where we are committed to
          providing quality healthcare with compassion and excellence. Our team
          of experienced doctors and healthcare professionals is dedicated to
          ensuring that every patient receives personalized care and attention.
        </p>
        <p className="text-lg text-gray-700 text-justify lg:text-start leading-relaxed">
          We specialize in a wide range of medical services, including
          pediatrics, cardiology, orthopedics, neurology, dermatology, and
          ophthalmology. Our mission is to deliver the best possible care to our
          patients by combining advanced medical technology with a human touch.
        </p>
        <p className="text-lg text-gray-700 text-justify lg:text-start leading-relaxed">
          One of our most important services is our {" "}
          <strong>Emergency Ambulance Service</strong>, which ensures that
          patients in critical situations receive immediate assistance and are
          transported safely to the nearest hospital. Your safety and well-being
          are our top priorities, and we are always prepared to respond
          promptly in times of need.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="w-full lg:w-3/4 relative overflow-hidden rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <img 
          className="rounded-lg shadow-lg transform transition duration-500 hover:scale-105" 
          src={img} 
          alt="About Us" 
        />
      </motion.div>
    </motion.div>
  );
};

export default About;





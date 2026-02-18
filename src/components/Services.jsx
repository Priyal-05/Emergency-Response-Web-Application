import React from "react";
import { motion } from "framer-motion";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat, FaAmbulance } from "react-icons/fa";
import { MdLocalHospital } from "react-icons/md";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="drop-shadow-lg" />;
  const icon2 = <MdHealthAndSafety size={35} className="drop-shadow-lg" />;
  const icon3 = <FaHeartbeat size={35} className="drop-shadow-lg" />;
  const icon4 = <FaAmbulance size={35} className="drop-shadow-lg" />;
  const icon5 = <MdLocalHospital size={35} className="drop-shadow-lg" />;

  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16 bg-white text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="flex flex-col items-center lg:flex-row justify-between"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div>
          <h1 className="text-5xl font-extrabold text-center lg:text-start drop-shadow-xl uppercase tracking-wide">
            Our Services
          </h1>
          <p className="mt-2 text-lg text-center lg:text-start font-light">
            At <span className="font-bold">MedResQ</span>, we are committed
            to providing top-notch medical assistance with a focus on speed,
            accuracy, and patient care. Our services ensure that every
            individual receives timely attention and the best possible medical
            support.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" className="bg-gray-800 text-white font-bold hover:bg-gray-700 transition duration-300" />
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="flex flex-col lg:flex-row flex-wrap gap-5 pt-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <ServicesCard icon={icon1} title="Lab Test" description="We offer a wide range of laboratory tests to help diagnose and monitor various health conditions with accuracy and efficiency." />
        <ServicesCard icon={icon2} title="Health Check" description="Our comprehensive health check-up packages ensure early detection and prevention of diseases for better well-being." />
        <ServicesCard icon={icon3} title="Heart Health" description="We monitor cardiac health to detect potential issues early, ensuring timely intervention and treatment." />
        <ServicesCard icon={icon4} title="Request Ambulance" description="Emergency? Request an ambulance immediately to your location and notify the nearest hospital for faster response." />
        <ServicesCard icon={icon5} title="Nearby Hospital Notification" description="Get real-time updates about hospital availability and notify the nearest facility to ensure immediate care." />
      </motion.div>
    </motion.div>
  );
};

export default Services;




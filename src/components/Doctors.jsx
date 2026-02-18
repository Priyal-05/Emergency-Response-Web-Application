import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const doctorsData = [
  { img: "/src/assets/img/doc3.jpg", name: "Dr. Rohan Mehta", specialties: "Orthopedic Surgeon" },
  { img: "/src/assets/img/doc4.jpg", name: "Dr. Priya Sharma", specialties: "Cardiologist" },
  { img: "/src/assets/img/doc1.jpg", name: "Dr. Aarav Patel", specialties: "Pediatrician" },
  { img: "/src/assets/img/doc2.jpg", name: "Dr. Kavita Iyer", specialties: "Neurologist" },
  { img: "/src/assets/img/doc5.jpg", name: "Dr. Sameer Khanna", specialties: "Dermatologist" },
  { img: "/src/assets/img/doc6.jpg", name: "Dr. Ananya Nair", specialties: "Ophthalmologist" },
];

const hospitalsData = [
  { img: "/src/assets/img/hosp1.jpg", name: "Apollo Hospitals, Ahmedabad", services: "Multispecialty Hospital" },
  { img: "/src/assets/img/hosp2.jpg", name: "Sterling Hospital, Ahmedabad", services: "Advanced Medical Care" },
  { img: "/src/assets/img/hosp3.jpg", name: "Zydus Hospital, Ahmedabad", services: "Cardiology & Emergency Care" },
];

const Doctors = () => {
  const sliderDoctors = useRef(null);
  const sliderHospitals = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 600,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    responsive: [
      { breakpoint: 1023, settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16 bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Doctors Section */}
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold text-gray-800">Our Doctors</h1>
        <p className="mt-2 text-lg text-gray-600">Meet our highly qualified doctors specializing in various fields.</p>
      </motion.div>

      <Slider ref={sliderDoctors} {...settings} className="py-5">
        {doctorsData.map((e, index) => (
          <motion.div 
            className="h-[400px] text-black rounded-xl shadow-xl cursor-pointer bg-white overflow-hidden"
            key={index}
            whileHover={{ scale: 1.05 }}
          >
            <img src={e.img} alt="doctor" className="h-80 w-full object-contain" />
            <div className="flex flex-col justify-center items-center p-4">
              <h1 className="font-semibold text-2xl text-gray-700">{e.name}</h1>
              <h3 className="text-gray-500">{e.specialties}</h3>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* Hospitals Section */}
      <motion.div className="mt-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">Partnered Hospitals</h1>
          <p className="mt-2 text-lg text-gray-600">Our affiliated hospitals ensure top-tier medical services.</p>
        </div>

        <Slider ref={sliderHospitals} {...settings} className="py-5">
          {hospitalsData.map((e, index) => (
            <motion.div 
              className="h-[400px] text-black rounded-xl shadow-xl cursor-pointer bg-white overflow-hidden"
              key={index}
              whileHover={{ scale: 1.05 }}
            >
              <img src={e.img} alt="hospital" className="h-80 w-full object-contain" />
              <div className="flex flex-col justify-center items-center p-4">
                <h1 className="font-semibold text-2xl text-gray-700">{e.name}</h1>
                <h3 className="text-gray-500">{e.services}</h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </motion.div>
  );
};

export default Doctors;





import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const blogData = [
  { 
    img: img1, 
    headline: "Secrets to Better Sleep", 
    description: "Struggling with sleep? Learn expert-backed tips to fall asleep faster, stay asleep longer, and wake up feeling refreshed. Explore the role of diet, exercise, and nighttime habits in improving your sleep quality." 
  },
  { 
    img: img2, 
    headline: "A Heart-Healthy Diet", 
    description: "Your heart health is in your hands! Discover the best foods to boost cardiovascular health, reduce cholesterol, and maintain a healthy weight. Learn how small dietary changes can make a big difference." 
  },
  { 
    img: img3, 
    headline: "Pediatric Vaccinations", 
    description: "Vaccines are essential for your child's immunity. Learn about recommended vaccination schedules, the importance of booster shots, and how vaccines protect against deadly diseases for a healthy future." 
  },
  { 
    img: img4, 
    headline: "Mental Health Awareness", 
    description: "Mental health matters. Explore coping strategies for stress, anxiety, and depression. Learn how to build emotional resilience and maintain a balanced life with expert advice and mindfulness practices." 
  },
  { 
    img: img5, 
    headline: "Regular Exercise & Immunity", 
    description: "Did you know exercise strengthens your immune system? Discover the best workout routines to boost immunity, improve fitness, and reduce stress for a healthier lifestyle." 
  },
  { 
    img: img6, 
    headline: "Skin Care Essentials", 
    description: "Achieve flawless skin with the right skincare routine. Explore expert tips on hydration, sun protection, and the best ingredients for glowing, youthful skin." 
  },
];

const Blogs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-gray-50">
      
      {/* Heading */}
      <motion.h1 
        className="text-4xl font-medium text-center lg:text-start mb-4 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Latest Blog Posts
      </motion.h1>
      <p className="mt-2 text-center lg:text-start text-lg text-gray-700">
        Explore our informative articles on health and wellness.
      </p>

      {/* CountUp Feature */}
      

      {/* Blog Cards Section */}
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {blogData.map((blog, index) => (
          <motion.div 
            key={index}
            className="w-full max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:shadow-3xl hover:-translate-y-5 hover:rotate-2 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeInOut" }}
            onClick={() => setSelectedBlog(blog)}
          >
            <img src={blog.img} alt={blog.headline} className="w-full h-56 object-cover rounded-t-xl transition-all duration-500 ease-in-out hover:brightness-110" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-500">
                {blog.headline}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-gray-50">
      {/* CountUp Achievements Section */}
      <motion.h2 
        className="text-3xl font-medium text-center mt-16 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Our Achievements
      </motion.h2>
      <div ref={ref} className="mt-12 py-12 bg-gradient-to-r from-blue-50 to-gray-100 rounded-lg shadow-md text-center">
        <div className="flex flex-wrap justify-center gap-10">
          {[{ value: 250, label: "Hospitals/Clinics" },
            { value: 150, label: "Labs/Blood Banks" },
            { value: 1.2, label: "Patient Records", suffix: "M" },
            { value: 5000, label: "Beds Being Served" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="text-2xl font-medium text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeInOut" }}
            >
              {inView && <CountUp start={0} end={item.value} duration={3} />} {item.suffix || ""}+
              <p className="text-lg text-gray-600 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <motion.h2 
        className="text-3xl font-medium text-center mt-16 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="mt-6 max-w-3xl mx-auto">
        {[{ question: "What is the average ambulance waiting time?", answer: "The average waiting time varies by location but is typically between 10-20 minutes." },
          { question: "How are hospitals selected for patient referrals?", answer: "We work with accredited hospitals to ensure quality service." },
          { question: "Is there a guarantee of timely medical service?", answer: "We prioritize timely responses but unforeseen circumstances may impact arrival times." },
          { question: "What are the procedures for emergency hospital admissions?", answer: "Patients are triaged based on severity and admitted accordingly." }
        ].map((faq, index) => (
          <motion.div 
            key={index} 
            className="border-b py-4 bg-white shadow-md rounded-lg px-6 my-2"
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <details className="w-full text-left text-lg text-gray-900">
              <summary className="font-medium cursor-pointer">{faq.question}</summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blogs;















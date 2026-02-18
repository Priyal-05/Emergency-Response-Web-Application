import React from 'react';
import { motion } from 'framer-motion';
import Button from "../layouts/Button";

export const Home = () => {
    return (
        <motion.div 
            className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.jpg')] bg-no-repeat bg-cover relative z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.0 }}
        >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <motion.div 
                className="w-full lg:w-4/5 space-y-5 mt-10 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
            >
                <h1 className="text-5xl font-bold leading-tight relative z-20">
                    Empowering Health Choices For a Vibrant Life Your Trusted...
                </h1>
                <p className="relative z-20">
                    When every second counts, MedResQ ensures that help reaches you without delay. Our platform connects you with trusted healthcare providers and emergency responders, ensuring that critical services are available whenever you need them.
                </p>
                <Button title="See Services" />
            </motion.div>
        </motion.div>
    );
};

export default Home;



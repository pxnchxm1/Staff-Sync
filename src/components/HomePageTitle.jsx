import { motion } from "framer-motion";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const HomePageTitle = () => {
    const [animationData, setAnimationData] = useState(null);
    const role =  localStorage.getItem("role");

    useEffect(() => {
        const fetchAnimationData = async () => {
            const response = await fetch("https://lottie.host/c9df1460-034e-4d8e-9d1e-3414833ee605/dox91JnU7v.json");
            const data = await response.json();
            setAnimationData(data);
        };
        fetchAnimationData();
    }, []);
    if (!animationData) {
        return <div></div>;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="flex lg:flex-row flex-col w-full items-start justify-between overflow-hidden"
        >
            <section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start lg:w-[60%] w-full">
                <section className="flex flex-col lg:items-start items-center justify-center gap-8">
                    <div className="flex flex-col lg:items-start items-center md:text-[4rem] sm:text-[3rem] ssm:text-[2.5rem] font-bold -tracking-tight">
                        Streamline<span>Your Schedule</span>
                    </div>
                    <div className="flex items-start lg:justify-start justify-center ">
                        <Lottie animationData={animationData} loop={true} autoplay={true} style={{ width: "40%", height: "40%" }} />
                    </div>
                    <p className="max-w-[90%] text-gray-700 dark:text-lightgrey text-lg lg:text-start text-center font-medium">
                        Effortlessly manage and book staff appointments with just a few taps. Whether you are booking a meeting, a consultation, or any other type of appointment, our intuitive
                        platform makes it quick and simple. Say goodbye to scheduling conflicts and hello to seamless organization.
                    </p>
                    { role==="STUDENT" ? 
                    <a href={"#dept"}>
                        <button className="flex items-center bg-dark rounded-full flex-row text-light dark:bg-light dark:text-dark px-6 gap-2 text-center text-lg py-3">
                            <FaArrowRight /> Get Started
                        </button>
                    </a> : <div></div>}
                </section>
            </section>
            <section className="w-[40%] h-[80vh] lg:flex gap-4 hidden ">
                <section className="flex flex-col gap-12  overflow-hidden">
                    <div className="animate-loop-scroll-down gap-12 flex flex-col">
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                    </div>
                    <div className="animate-loop-scroll-down gap-12 flex flex-col" aria-hidden="true">
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                    </div>
                </section>
                <section className="flex flex-col gap-12 overflow-hidden">
                    <div className="animate-loop-scroll-up gap-12 flex flex-col">
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                    </div>
                    <div className="animate-loop-scroll-up gap-12 flex flex-col" aria-hidden="true">
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                        <img src="/lake.jpg" alt="" className="max-w-none rounded-md" />
                    </div>
                </section>
            </section>
            <section className="flex lg:hidden mt-[5rem]">
                <section className="flex items-center gap-12">
                    <div className="animate-loop-scroll-left gap-12 flex">
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                    </div>
                    <div className="animate-loop-scroll-left gap-12 flex" aria-hidden="true">
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                        <img src="/lake.jpg" alt="" className="max-w-[20rem]" />
                    </div>
                </section>
            </section>
        </motion.section>
    );
};

export default HomePageTitle;

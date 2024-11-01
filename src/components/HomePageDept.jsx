import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineScience } from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { PiCookingPotBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
    {
        image: <MdOutlineScience />,
        title: "Computer Applications",
        color: "bg-[#dad6b1]",
        link: "/staff/Computer Applications",
    },
    {
        image: <GrTechnology />,
        title: "Engineering & Technology",
        color: "bg-[#f0cbce]",
    },
    {
        image: <FaBriefcaseMedical />,
        title: "Medical Science",
        color: "bg-[#b6e6d2]",
    },
    {
        image: <GoLaw />,
        title: "Law",
        color: "bg-[#f0cbdf]",
    },
    {
        image: <PiCookingPotBold />,
        title: "Hotel Management",
        color: "bg-[#dacbf0]",
    },
    {
        image: <FaBriefcaseMedical />,
        title: "Hotel Management",
        color: "bg-[#d8f0cb]",
    },
];

const HomePageDept = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            id="dept"
            className="py-24 w-full flex flex-col gap-12 lg:items-start items-center justify-center"
        >
            <h1 className="md:text-[4rem] sm:text-[3rem] ssm:text-[2.5rem] flex flex-col lg:items-start items-center font-bold">
                Uncover <span className="text-center">Your department</span>
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 w-full lg:px-0 md:px-12 sm:px-8 ssm:px-4 dark:text-dark">
                {cards.map((item, index) => (
                    <Link to={`${item.link}`} key={index} className={`${item.color} py-12 flex flex-col rounded-md gap-12 items-center justify-center cursor-pointer `}>
                        <p className="text-[5rem] text-center">{item.image}</p>
                        <p className="font-medium text-xl w-[90%] text-center">{item.title}</p>
                    </Link>
                ))}
            </div>
        </motion.section>
    );
};

export default HomePageDept;

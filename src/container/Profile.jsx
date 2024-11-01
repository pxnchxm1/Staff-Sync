import React from "react";
import { BsBuildingsFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaBookOpenReader, FaCalendarDays, FaPencil } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdLogout, MdOutlineHelpCenter } from "react-icons/md";
import { Link } from "react-router-dom";
import { lazy } from "react";
import { motion } from "framer-motion";

const Footer = lazy(() => import("../components/Footer"));

export default function Profile() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col bg-gray-200 min-h-screen w-full gap-4"
            >
                {/* BG AND PROFILE */}
                <section className='bg-[url("../public/pfpbg.jpeg")] flex flex-col gap-24  w-full'>
                    <div className="flex-row flex justify-start p-4 items-start mt-5  ">
                        <Link to={"/home"} className="bg-light rounded-full h-12 w-12 flex flex-col items-center justify-center">
                            <IoMdArrowBack className="text-dark h-5 w-5" />
                        </Link>
                    </div>
                    <div className="bg-white/5  backdrop-blur-sm">
                        <div className="flex flex-col p-4 gap-[0.6rem] justify-start items-start ml-2">
                            <div className="flex flex-row  justify-between w-full">
                                <p className="text-white font-bold text-[30px] ">Deepak H</p>
                                <FaPencil className="text-white h-6 w-6 p-1" />
                            </div>
                            <p className="text-gray-500  font-normal text-[14px]">Bio of the student</p>
                            <div className="flex flex-row justify-start items-start gap-5 mt-2">
                                <FaTwitter className="text-white h-6 w-6" />
                                <FaLinkedinIn className="text-white h-6 w-6" />
                                <FaGithub className="text-white h-6 w-6" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full  flex flex-col md:flex-row justify-start items-start gap-12 p-4 ">
                    {/* ACCOUNT INF0 */}
                    <section className="flex flex-col  justify-start items-start ml-2 mr-10 text-[15px] ssm:text-lg  text-gray-500 gap-3 ">
                        <p className="text-black  text-[23px] font-semibold mb-2">Account Info</p>
                        <div className="flex flex-row justify-start items-start gap-3">
                            <IoMail className="text-black  h-6 w-6 "></IoMail>
                            <span className=" bg-inherit outline-none border-none ">dph2002@gmail.com</span>
                        </div>
                        <div className="flex flex-row justify-start items-start gap-3">
                            <BsBuildingsFill className="text-black  h-6 w-6 "></BsBuildingsFill>
                            <span className=" bg-inherit outline-none border-none ">Computer Applications</span>
                        </div>
                        {/* <div className="flex flex-row justify-start items-start gap-3">
                        <FaBookOpenReader className="text-black  h-6 w-6 "></FaBookOpenReader>
                        <span className=" bg-inherit outline-none border-none">MCA</span>
                    </div> */}
                        {/* <div className="flex flex-row justify-start items-start gap-3">
                        <FaCalendarDays className="text-black  h-6 w-6 "></FaCalendarDays>
                        <span className=" bg-inherit outline-none border-none ">Semester - 3</span>
                    </div> */}
                    </section>
                    {/* SUPPORT */}
                    <section className="flex flex-col justify-start items-start  ssm:text-lg  ml-1">
                        <p className="text-black  ssm:text-[23px] font-semibold">Support</p>
                        <div className="flex flex-row  text-gray   justify-center items-center  gap-4  mb-2 mt-5">
                            <MdOutlineHelpCenter className=" h-7 w-7 p-1" />
                            <p className="font-thin ">Help Center</p>
                        </div>
                        <div className="flex flex-row text-red-500   justify-center items-center  gap-4  ">
                            <MdLogout className=" h-7 w-7 p-1" />
                            <p className="font-thin  ">Log Out</p>
                        </div>
                    </section>
                </section>
            </motion.div>
            <Footer />
        </>
    );
}

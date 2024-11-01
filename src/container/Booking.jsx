import React from "react";
import { useEffect, useState } from "react";
import { lazy } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));

const Booking = () => {
    const [animationData, setAnimationData] = useState(null);
    const { staffId } = useParams();
    const studentId = localStorage.getItem("id");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [reason, setReason] = useState("");

    const fetchAnimation = async () => {
        const response = await fetch("https://lottie.host/174b8b73-d9e1-4f9b-9200-621aee1b618b/mTMop2JZrf.json");
        const data = await response.json();
        setAnimationData(data);
    };

    useEffect(() => {
        fetchAnimation();
    }, []);

    const handleDateChange = (e) => setDate(e.target.value);
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleReasonChange = (e) => setReason(e.target.value);

    const handleSubmit = async () => {
        const token = localStorage.getItem("token");
        const appointmentData = {
            student: { id: studentId, role: "STUDENT" },
            staff: { id: staffId, role: "STAFF" },
            date,
            time,
            reason,
            status: "PENDING"
        };

        try {
            const response = await fetch("http://localhost:8080/api/appointment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(appointmentData)
            });
            if (!response.ok) {
                throw new Error(`Failed to schedule appointment: ${response.statusText}`);
            }
            const data = await response.json();
            alert("Appointment scheduled successfully");
        } catch (error) {
            alert("Failed to schedule appointment: " + error.message);
        }
    };

    return (
        <section className="flex flex-col  min-h-screen w-full bg-light dark:bg-dark text-dark dark:text-light">
            <Navbar />
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="xl:px-12 lg:px-8 sm:px-4 ssm:px-2 flex flex-col lg:gap-0 gap-8 py-8"
            >
                <h1 className="md:text-[4rem] sm:text-[3rem] ssm:text-[2.5rem] font-bold -tracking-tight lg:text-start text-center">Book Your Appointment</h1>
                <section className="flex items-center justify-between w-full p-4 lg:flex-row flex-col gap-12">
                    <div className="flex flex-col gap-12 lg:w-[50%] w-full lg:items-start lg:order-1 order-2">
                        <div className="flex-col lg:items-start items-center gap-2 w-full hidden">
                            <p className="text-2xl font-medium">Select Department</p>
                            <select name="" id="" className="border-dark border-2 p-4 lg:w-[70%] w-[90%] text-dark  rounded-lg text-lg font-medium focus:outline-none">
                                <option value="">MCA</option>
                            </select>
                        </div>
                        {/* <div className="flex flex-col lg:items-start items-center gap-2 lg:w-full">
                            <p className="text-2xl font-medium">Select Staff</p>
                            <select name="" id="" className="border-dark border-2 p-4 lg:w-[70%] w-[90%]  rounded-lg text-lg font-medium text-dark focus:outline-none">
                                <option value="">Abdur Raheem</option>
                            </select>
                        </div> */}
                        <div className="flex flex-col lg:items-start items-center gap-2 lg:w-full ">
                            <p className="text-2xl font-medium">Meeting Date</p>
                            <input type="date" value={date} onChange={handleDateChange} className="border-dark border-2 p-4 lg:w-[70%] w-[90%]  rounded-lg text-lg font-medium text-dark focus:outline-none" />
                        </div>
                        <div className="flex flex-col lg:items-start items-center gap-2 lg:w-full ">
                            <p className="text-2xl font-medium">Schedule Time</p>
                            <input type="time" value={time} onChange={handleTimeChange} className="border-dark border-2 p-4 lg:w-[70%] w-[90%]  rounded-lg text-lg font-medium text-dark focus:outline-none" />
                        </div>
                    </div>
                    <div className="lg:w-[50%] w-full flex items-center justify-center lg:order-2 order-1">
                        <Lottie animationData={animationData} loop={true} autoplay={true} />
                    </div>
                </section>
                <div className="flex flex-col px-4 gap-2 lg:items-start items-center w-full">
                    <p className="text-2xl font-medium">Objective of the meet</p>
                    <textarea
                        value={reason}
                        onChange={handleReasonChange}
                        name="purpose"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Objective for your meet"
                        className="border-dark border-2 p-4 w-full rounded-lg text-lg font-medium text-dark focus:outline-none"
                    />
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-12 px-4 justify-between lg:my-[5rem] my-5">
                    <button onClick={()=>{history.back()}} className="bg-light text-dark font-medium outline outline-dark text-xl px-12 py-2 rounded-full">Cancel</button>
                    <button onClick={handleSubmit} className="bg-dark text-light dark:text-dark font-medium dark:bg-light text-xl px-12 py-2 rounded-full">Schedule</button>
                </div>
            </motion.section>
            <Footer />
        </section>
    );
};

export default Booking;

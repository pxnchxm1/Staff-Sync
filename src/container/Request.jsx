import { motion } from "framer-motion";
import React, { lazy, useEffect, useState } from "react";

const Navbar = lazy(() => import("../components/Navbar"));

const Request = () => {
    const [appointments, setAppointments] = useState([]);
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchAppointments = async () => {
            const endpoint =
                role === "STUDENT"
                    ? `/api/appointment/student/${userId}`
                    : `/api/appointment/staff/${userId}`;

            try {
                const response = await fetch(`http://localhost:8080${endpoint}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error("Failed to fetch appointments:", error);
            }
        };

        fetchAppointments();
    }, [role, userId, token]);

    const handleApprove = async (appointmentId) => {
        try {
            await fetch(`http://localhost:8080/api/appointment/approve/${appointmentId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            window.alert("Appointment has been approved");
            window.location.reload();
        } catch (error) {
            console.error("Failed to approve appointment:", error);
        }
    };

    const handleCancel = async (appointmentId) => {
        try {
            await fetch(`http://localhost:8080/api/appointment/cancel/${appointmentId}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            window.alert("Appointment has been cancelled");
            window.location.reload();
        } catch (error) {
            console.error("Failed to cancel appointment:", error);
        }
    };

    return (
        <>
            <section className="min-h-screen flex flex-col">
                <Navbar />
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="xl:px-12 lg:px-8 sm:px-4 ssm:px-2 flex py-8 flex-col gap-12"
                >
                    <div className="flex flex-col items-center md:text-[3rem] sm:text-[2rem] ssm:text-[1.5rem] font-bold -tracking-tight">View Request</div>
                    <div className="flex flex-col gap-4">
                        <div className="2xl:flex hidden items-center text-xl font-bold w-full px-4">
                            <p className="flex-1">Name</p>
                            <p className="flex-1">Date and Time</p>
                            <p className="flex-1">Objective</p>
                            <p className="flex-1">Status</p>
                            {role=="STAFF"? <p className="flex-1">Actions</p> : <p className="flex-1"></p>}
                        </div>
                        {appointments.map((appointment, index) => (
                            <div key={index} className="flex items-center bg-dark/5 rounded-lg px-4 py-4 gap-4 w-full">
                                <p className="flex-1">{role === "STUDENT" ? appointment.staff.name : appointment.student.name}</p>
                                <div className="flex-1 flex flex-col">
                                    <p>{appointment.date}</p>
                                    <p>{appointment.time}</p>
                                </div>
                                <p className="flex-1 text-sm">{appointment.reason}</p>
                                <p className="flex-1 text-sm">{appointment.status}</p>
                                <div className="flex-1 flex gap-2 justify-end">
                                    {role === "STAFF" && appointment.status === "PENDING" && (
                                        <>
                                            <button
                                                onClick={() => handleApprove(appointment.id)}
                                                className="bg-green-500 text-white py-1 px-2 rounded-lg"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleCancel(appointment.id)}
                                                className="bg-red-500 text-white py-1 px-2 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                    {role === "STAFF" && appointment.status === "SCHEDULED" && (
                                        <>
                                            <button
                                                disabled
                                                className="bg-gray-400 text-white py-1 px-2 rounded-lg cursor-not-allowed"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleCancel(appointment.id)}
                                                className="bg-red-500 text-white py-1 px-2 rounded-lg"
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </section>
        </>
    );
};

export default Request;

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosClose, IoIosMail } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const SignUpForm = () => {
    const [pass, setPass] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        department: "Computer Applications",
        role: "Student",
    });
    const [message, setMessage] = useState("");

    const togglePass = () => {
        setPass((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = formData.role === "Student" ? "addStudent" : "addStaff";
        
        try {
            const response = await fetch(`http://localhost:8080/api/auth/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setMessage("Registration successful! Please login to continue.");
            } else {
                const error = await response.text();
                setMessage(`Error: ${error}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center 2xl:gap-8 ssm:gap-5 sm:gap-6">
            <h1 className="lg:text-4xl ssm:text-[2.6rem] font-medium">Register Now</h1>
            <section className="flex flex-col items-center gap-4 sm:mt-0 ssm:mt-[2rem]">
                <div className="bg-lightgrey px-8 py-4 rounded-full flex items-center sm:gap-12 ssm:gap-2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="text-dark bg-lightgrey outline-none border-none text-lg"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <CgProfile className="text-xl" />
                </div>
                <select
                    name="department"
                    className="bg-lightgrey pr-28 pl-6 py-5  rounded-full flex items-center sm:gap-12 ssm:gap-2 text-slate-600"
                    value={formData.department}
                    onChange={handleChange}
                >
                    <option value="Computer Applications">Computer Applications</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Medical">Medical</option>
                    <option value="Btech">B.Tech</option>
                </select>
                <div className="bg-lightgrey px-8 py-4 rounded-full flex items-center sm:gap-12 ssm:gap-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="text-dark bg-lightgrey outline-none border-none text-lg"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <IoIosMail className="text-xl" />
                </div>
                <div className="bg-lightgrey px-8 py-4 rounded-full flex items-center sm:gap-12 ssm:gap-2">
                    <input
                        type={pass ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="text-dark bg-lightgrey outline-none border-none text-lg"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {pass ? (
                        <IoIosClose className="text-xl cursor-pointer" onClick={togglePass} />
                    ) : (
                        <IoEye className="text-xl cursor-pointer" onClick={togglePass} />
                    )}
                </div>
            </section>
            <section className="flex flex-row items-center gap-8 sm:py-0 ssm:py-[1rem]">
                <div className="flex items-center gap-2 text-xl font-medium">
                    <input type="radio" id="student" name="role" value="STUDENT" checked={formData.role === "STUDENT"} onChange={handleChange} />
                    <label htmlFor="student">Student</label>
                </div>
                <div className="flex items-center gap-2 text-xl font-medium">
                    <input type="radio" id="staff" name="role" value="STAFF" checked={formData.role === "STAFF"} onChange={handleChange} />
                    <label htmlFor="staff">Staff</label>
                </div>
            </section>
            <section className="flex flex-col items-center gap-4">
                <button
                    type="submit"
                    aria-label="SignUp"
                    className="bg-dark text-lg font-medium sm:px-12 sm:py-2 ssm:px-24 ssm:py-[0.6rem] text-light rounded-full"
                >
                    Sign Up
                </button>
                <div className="flex gap-4">
                    <h2 className="text-lightblack">Have an account?</h2>
                    <Link to={"/"} className="hover:underline cursor-pointer underline-offset-[3px] font-semibold">
                        Sign In
                    </Link>
                </div>
                {message && <p className="text-red-500 mt-4">{message}</p>}
            </section>
        </form>
    );
};

export default SignUpForm;

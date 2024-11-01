import { motion } from "framer-motion";
import React, { lazy, useState } from "react";
import { IoIosSearch, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Logo = lazy(() => import("./Logo.jsx"));
const ThemeToggler = lazy(() => import("./ThemeToggler.jsx"));

const Navbar = () => {
    const role = localStorage.getItem("role");
    const [search, setSearch] = useState(false);
    const [menu, setMenu] = useState(false);

    const toggleSearch = () => {
        setSearch((prevItem) => !prevItem);
    };

    const toggleMenu = () => {
        setMenu((prevItem) => !prevItem);
    };

    return (
        <motion.nav initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <section className="lg:flex hidden w-full items-center justify-between py-5 xl:px-12 lg:px-8">
                <Logo />
                {search && (
                    <div className="flex-1 xl:px-12 lg:px-8">
                        <input
                            type="text"
                            placeholder="Search Faculty"
                            className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl w-full outline-none dark:border-[1.9px]"
                        />
                    </div>
                )}
                <div className="flex items-center gap-6">
                    {/* {search ? (
                        <IoClose className="text-4xl" onClick={() => toggleSearch(false)} />
                    ) : (
                        <IoIosSearch onClick={() => toggleSearch()} className="text-[3rem] px-3 py-2 font-bold cursor-pointer bg-dark text-light dark:bg-light dark:text-dark rounded-full" />
                    )} */}

                    <ThemeToggler />
                    <Link to={"/request"}>
                        {role==="STAFF"? 
                        <button aria-label="Request" className="bg-dark dark:bg-light dark:text-dark dark:font-semibold text-white rounded-xl px-6 py-3">
                            View Request
                        </button>:
                        <button aria-label="Request" className="bg-dark dark:bg-light dark:text-dark dark:font-semibold text-white rounded-xl px-6 py-3">
                        Request Status
                    </button>}
                    </Link>
                    <Link to={"/"}>
                        <button onClick={()=> {localStorage.clear()}} aria-label="logout" className="bg-dark dark:bg-light dark:text-dark dark:font-semibold text-white rounded-xl px-6 py-3">
                            Logout
                        </button>
                    </Link>

                    {/* <Link to={"/profile"}>
                        <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
                    </Link> */}
                    <div className="flex flex-col items-end">
                        <p className="font-bold text-xl outline outline-black dark:outline-white rounded-full py-2 px-4 outline-1">{localStorage.getItem("name")}</p>
                    </div>
                </div>
            </section>
            <>
                {search ? (
                    <>
                        {/* <div className="flex items-center justify-center py-8 gap-4 lg:hidden">
                            <input
                                type="text"
                                placeholder="Search Faculty"
                                className="border-dark dark:bg-dark dark:border-light border-2 text-xl px-8 py-2 rounded-xl sm:w-[80%] ssm:w-[70%] outline-none dark:border-[1.9px]"
                            />
                            <IoClose className="text-4xl" onClick={() => toggleSearch(false)} />
                        </div> */}
                    </>
                ) : (
                    <section className="flex lg:hidden items-center justify-between py-5 md:px-10 sm:px-7 ssm:px-5">
                        <Logo />
                        <div className="text-4xl flex items-center sm:gap-8 ssm:gap-4">
                            <IoIosSearch
                                onClick={() => toggleSearch()}
                                className="text-[3rem] px-3 py-2 font-bold cursor-pointer bg-dark text-light dark:bg-light dark:text-dark rounded-full hidden"
                            />
                            {menu ? (
                                <>
                                    <IoClose onClick={() => toggleMenu()} className="relative" />
                                    <div className="absolute z-30 bg-dark dark:bg-light w-[15rem] h-[20rem] top-[15%] right-[5%] rounded-lg flex items-center justify-center flex-col gap-8 ">
                                        <img src="/img13.jpg" alt="profile" className="w-[3rem] h-[3rem] rounded-full" />
                                        <p className="text-dark text-lg hover:underline hover:underline-offset-2 bg-light dark:bg-dark dark:text-light px-4 py-2 rounded-lg">View Request</p>
                                        <ThemeToggler />
                                    </div>
                                </>
                            ) : (
                                <IoMdMenu onClick={() => toggleMenu()} />
                            )}
                        </div>
                    </section>
                )}
            </>
        </motion.nav>
    );
};

export default Navbar;

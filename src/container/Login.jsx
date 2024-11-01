import React, { lazy, Suspense, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const NoLogo = lazy(() => import("../components/NoLogo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const LoginForm = lazy(() => import("../components/LoginForm.jsx"));

const Login = () => {
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        const hasShownSplash = sessionStorage.getItem("hasShownSplash");

        if (!hasShownSplash) {
            const timer = setTimeout(() => {
                setSplash(false);
                sessionStorage.setItem("hasShownSplash", "true");
                document.body.style.overflow = "auto";
            }, 2000);

            document.body.style.overflow = "hidden";

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "auto";
            };
        } else {
            setSplash(false);
        }
    }, []);

    return (
        <AnimatePresence>
            {splash ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="w-full min-h-screen flex items-center justify-center overflow-hidden"
                >
                    <section className="flex flex-row items-center">
                        <LazyLoadImage src="/logo.jpeg" alt="logo" effect="blur" className="lg:w-[13rem] lg:h-[13rem] sm:w-[10rem] sm:h-[10rem] ssm:w-[8rem] ssm:h-[8rem]" />
                        <h1 className="lg:text-5xl sm:text-4xl ssm:text-3xl font-semibold tracking--wide">StaffSync</h1>
                    </section>
                </motion.div>
            ) : (
                <Suspense fallback={<></>}>
                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="flex flex-row justify-between w-full h-[100vh]" // Ensuring full height for the main content
                    >
                        <div className="lg:w-[60%] ssm:w-[100%] h-full">
                            <div className="xl:px-8 lg:px-6 sm:px-4 ssm:px-2 py-4 h-[10%]">
                                <NoLogo />
                            </div>
                            <div className="flex items-center justify-center h-[90%]">
                                <LoginForm />
                            </div>
                        </div>
                        <div className=" w-[40%] h-full lg:flex hidden justify-end">
                            <Image />
                        </div>
                    </motion.section>
                </Suspense>
            )}
        </AnimatePresence>
    );
};

export default Login;

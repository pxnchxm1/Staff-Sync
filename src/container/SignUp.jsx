import React from "react";
import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

const NoLogo = lazy(() => import("../components/NoLogo.jsx"));
const Image = lazy(() => import("../components/Image.jsx"));
const SignUpForm = lazy(() => import("../components/SignUpForm.jsx"));

const SignUp = () => {
    return (
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
                        <SignUpForm />
                    </div>
                </div>
                <div className=" w-[40%] h-full lg:flex hidden justify-end">
                    <Image />
                </div>
            </motion.section>
        </Suspense>
    );
};

export default SignUp;

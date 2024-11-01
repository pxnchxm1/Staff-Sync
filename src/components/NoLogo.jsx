import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Logo = () => {
    return (
        <div>
            <section className="flex flex-row items-center ">
                <LazyLoadImage src="/logo.png" alt="logo" effect="blur" className="w-[5rem] h-[5rem] dark:bg-dark" />
                <h1 className="text-3xl font-semibold tracking--wide sm:flex hidden text-dark dark:text-light">StaffSync</h1>
            </section>
        </div>
    );
};

export default Logo;

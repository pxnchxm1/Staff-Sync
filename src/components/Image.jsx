import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = () => {
    return (
        <section className="flex justify-end">
            <LazyLoadImage src="/library.jpeg" alt="image" effect="blur" className="w-[40rem] h-[100vh]" />
        </section>
    );
};

export default Image;

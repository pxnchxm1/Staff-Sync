import React from "react";
import { lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar.jsx"));
const HomePageContainer = lazy(() => import("../components/HomePageContainer.jsx"));
const Footer = lazy(() => import("../components/Footer"));

const Home = () => {
    return (
        <section className="bg-light dark:bg-dark dark:text-light">
            <Navbar />
            <HomePageContainer />
            <Footer />
        </section>
    );
};

export default Home;

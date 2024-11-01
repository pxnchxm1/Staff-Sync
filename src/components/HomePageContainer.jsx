import React, { lazy } from "react";

const HomePageTitle = lazy(() => import("../components/HomePageTitle.jsx"));
const HomePageDept = lazy(() => import("../components/HomePageDept"));

const HomePageContainer = () => {
    
    
    
    const role =  localStorage.getItem("role");
    return (
        <section className="flex flex-col items-center justify-center py-8 w-full h-full xl:px-12 lg:px-8 sm:px-4 ssm:px-2">
            <HomePageTitle />
            {role==="STUDENT"?<HomePageDept />:<div></div>}
        </section>
    );
};

export default HomePageContainer;

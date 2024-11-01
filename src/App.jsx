import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeProvider from "./context/ThemeProvider";

const Home = lazy(() => import("./container/Home.jsx"));
const Login = lazy(() => import("./container/Login.jsx"));
const SignUp = lazy(() => import("./container/SignUp.jsx"));
const Profile = lazy(() => import("./container/Profile.jsx"));
const Staff = lazy(() => import("./container/Staff.jsx"));
const Booking = lazy(() => import("./container/Booking.jsx"));
const Request = lazy(() => import("./container/Request"));

const App = () => {
    return (
        <main className="w-full min-h-screen bg-white dark:bg-dark">
            <ThemeProvider>
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route element={<Login />} path="/" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<Home />} path="/home" />
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<Staff />} path="/staff/:department" />
                        <Route element={<Booking />} path="/booking/:staffId" />
                        <Route element={<Request />} path="/request" />
                    </Routes>
                </Suspense>
            </ThemeProvider>
        </main>
    );
};

export default App;

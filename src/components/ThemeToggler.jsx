import React from "react";
import { ThemeSwitcher } from "../context/ThemeProvider";
import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggler = () => {
    const { dark, toggleTheme } = useContext(ThemeSwitcher);

    return (
        <div onClick={() => toggleTheme()} className="cursor-pointer bg-dark text-white dark:bg-light dark:text-dark  items-center flex justify-center p-3 rounded-xl text-2xl">
            {dark ? <IoMoonOutline /> : <IoSunnyOutline />}
        </div>
    );
};

export default ThemeToggler;

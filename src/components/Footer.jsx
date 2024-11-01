import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark dark:bg-light text-light dark:text-dark flex items-end py-12 justify-center w-full "
        >
            Copyright @StaffSync
        </motion.div>
    );
};

export default Footer;

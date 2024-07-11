"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function BannerSection() {
    return (
        <section className="lg:py-16 mt-10 mb-12 lg:px-24 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start ">
                    <h1 className="text-white mb-3 text-4xl sm:text-5xl lg:text-8xl lg:leading-tight font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600">Hello, I&apos;m{""} </span> <br />
                        <TypeAnimation
                            sequence={[
                                "Shahidullah",
                                2500,
                                "A Professional",
                                300,
                                "MERN Stack",
                                500,
                                "Web Developer",
                                2000,
                                
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Passionate junior web developer skilled in the MERN stack, experienced in creating dynamic web applications with HTML, CSS, Tailwind, JavaScript, React, Node.js, MongoDB, and Express. Eager to contribute to innovative projects.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className=" px-6 inline-block py-3 sm:w-fit rounded-full lg:mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-700 hover:text-white  text-black"
                        >
                            Connect with Me
                        </Link>
                        <Link
                            href="https://drive.google.com/file/d/1sryLJQBnV9nCzp9bcAqRhniQBIgkv_15/view?usp=sharing"
                            className="px-1 inline-block py-1  sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                Download Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>

                <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative col-span-4 place-self-center mt-4 lg:mt-0 hidden lg:block">
                    <Image
                        src="/images/hero.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={300}
                        height={300}
                    />
                </motion.div>

            </div>
        </section>
    )
}

export default BannerSection
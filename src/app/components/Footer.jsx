import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { SiGithub } from "react-icons/si";


const Footer = () => {
    return (
        <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white p-2 lg:mx-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full">
                <div className="flex flex-col items-center justify-center">
                    <Link
                        href={"/"}
                    >
                        <Image
                            src="/images/footerLogo.png"
                            alt="hero image"
                            width={250}
                            height={250}
                        />
                    </Link>
                </div>
                <div className=" bg-base-200 text-base-content rounded flex flex-col justify-center items-center space-y-10 text-center">
                    <nav className="flex flex-wrap gap-5 lg:gap-12 w-full justify-center">
                       <Link href={'#about'}> <h3 className="link link-hover">About</h3></Link>
                       <Link href={'#projects'}> <h3 className="link link-hover">Projects</h3></Link>
                        <Link href={'#contact'}><h3 className="link link-hover">Contact</h3></Link>
                        <Link href={'https://drive.google.com/file/d/1NQH6yyUUG8jiUyJtnQmZhf8QdhluJRri/view?usp=drive_link'}><h3 className="link link-hover">Resume</h3></Link>
                        <Link href={'https://drive.google.com/file/d/1ykx7JbV37vRm0Wa3dyLR5B1G7t7YVQNq/view?usp=drive_link'}><h3 className="link link-hover">Certificate</h3></Link>
                        <Link href={'https://drive.google.com/file/d/1NQH6yyUUG8jiUyJtnQmZhf8QdhluJRri/view?usp=drive_link'}><h3 className="link link-hover">CV</h3></Link>
                    </nav>
                    <nav>
                        <div className="flex flex-wrap gap-6">
                           <Link href={'https://www.linkedin.com/in/shahidullah177/'}><div><GrLinkedin className="text-3xl"/></div></Link>
                           <Link href={'https://github.com/shahidulllah'}><div><SiGithub className="text-3xl"/></div></Link>
                           <Link href={'https://www.facebook.com/mdshahidulllah/'}><div><FaSquareFacebook className="text-3xl"/></div></Link>
                        </div>
                    </nav>
                    <aside>
                        <p>Copyright © ${new Date().getFullYear()} - All right reserved by Shahidullah</p>
                    </aside>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
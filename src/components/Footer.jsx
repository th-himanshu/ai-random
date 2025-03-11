import React from "react";
import Section from "./Section";
import { youtube, linkedin, twitter,facebook } from "../assets";

const socials = [
    {
        title: "LinkedIn",
        iconUrl: linkedin,
        url: "https://www.linkedin.com/company/dkg-labs/",
    },
    {
        title: "Facebook",
        iconUrl: facebook,
        url: "https://www.facebook.com/DKGLabs",
    },
    {
        title: "Twitter",
        iconUrl: twitter,
        url: "https://www.twitter.com/DKGLabs",
    },     
];

const Footer = () => {
    return (
        <Section crosses className="!px-0 !py-10">
            <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
                <p className="caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights reserved.</p>

                <ul className="flex gap-5 flex-wrap">
                    {socials.map((item, i) => (
                        <a key={i} href={item.url} target="_blank" className="flex items-center justify-center w-10 h-10 bg-[#15131D] rounded-full transition-colors hover:bg-n-6">
                            <img src={item.iconUrl} width={24} height={24} alt={item.title} />
                        </a>
                    ))}
                </ul>
            </div>
        </Section>
    );
};

export default Footer;

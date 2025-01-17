import React from 'react';
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const links = [
        {herf:'https://discord.com',icon:<FaDiscord/>},
        {herf:'https://twitter.com',icon:<FaTwitter/>},
        {herf:'https://github.com',icon:<FaGithub/>},
        {herf:'https://twitch.com',icon:<FaTwitch/>}
    ]

    return (
        <footer className='w-screen bg-violet-300 py-4 text-black'>
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className='text-center text-sm md:text-left'>
                    &copy; Nova 2024.All rights reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {
                        links.map((link,index) => (
                            <a href={link.herf} key={index} target='_blank' rel='noopener noreferrer' className='text-black transition-colors ease-in-out hover:text-white'>{link.icon}</a>
                        ))
                    }
                </div>
                <a href="#privacy-policy" className='text-center text-sm hover:underline md:text-right'>Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
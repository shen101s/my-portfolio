import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import homeBG from './assets/home-bg.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Home({ className }) {
    const el = useRef(null);

    useEffect(() => {
        const typedItems = el.current.getAttribute("data-typed-items").split(",");
        const typed = new Typed(el.current, {
            strings: typedItems.map(item => item.trim()),
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <section className="flex items-center justify-left min-h-screen p-6">
                <div className={className}>
                    <img
                        src={homeBG}
                        alt="homeBG"
                        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
                    />

                    <div className="relative z-10 max-w-2xl animate-fadeIn">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Shenesis Eumague</h1>
                        <p className="text-xl font-semibold">
                            I'm a {" "}
                            <span
                                ref={el}
                                className="typed underline"
                                data-typed-items="Full-stack Developer., Freelancer., Virtual Assistant."
                            >
                                Full-stack Developer
                            </span>
                        </p>

                        <div className="flex gap-5 mt-4 text-2xl text-gray-600">
                            <a href="#" className="hover:text-blue-500 transition">
                                <FaTwitter />
                            </a>
                            <a href="#" className="hover:text-blue-700 transition">
                                <FaFacebook />
                            </a>
                            <a href="#" className="hover:text-pink-500 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" className="hover:text-blue-600 transition">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
import { FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer({ className }) {
    const name = 'Shenesis Eumague';
    const position = 'Full-stack Developer | Freelancer | Virtual Assistant';

    const menus = [
        { href:'https://facebook.com/', icon: FaFacebook },
        { href:'https://instagram.com/', icon: FaInstagram },
        { href:'https://linkedin.com/', icon: FaLinkedin },
        { href:'mailto:eumagueshenshen@gmail.com', icon: FaMailBulk },
    ];

    return (
        <>
            <section className="items-center mt-10 bg-gray-800" data-aos="fade-up">
                <div className={className}>
                    <footer className="text-gray-200">
                        <div className="max-w-5xl mx-auto text-center">
                        
                            <h2 className="text-2xl font-bold mb-4">{name}</h2>
                            <p className="text-gray-400 text-sm mb-6">
                                {position}
                            </p>

                            <div className="flex justify-center space-x-5 mb-6">
                                {menus.map((menu, index) => {
                                    const Icon = menu.icon;

                                    return (
                                        <a key={index} href={menu.href} target="_blank"className="hover:text-white transition">
                                            <Icon size={20} />
                                        </a>
                                    )   
                                })}
                            </div>

                            <div className="text-xs text-gray-500">
                            © {new Date().getFullYear()} {name}. All rights reserved.
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer;

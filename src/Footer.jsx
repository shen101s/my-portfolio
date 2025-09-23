import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer({ className }) {
    const name = 'Shenesis Eumague';
    const position = 'Full-stack Developer | Freelancer | Virtual Assistant';

    return (
        <>
            <section className="items-center mt-10 bg-gray-800">
                <div className={className}>
                    <footer className="text-gray-200">
                        <div className="max-w-5xl mx-auto text-center">
                        
                            <h2 className="text-2xl font-bold mb-4">{name}</h2>
                            <p className="text-gray-400 text-sm mb-6">
                                {position}
                            </p>

                            <div className="flex justify-center space-x-6 mb-6 text-sm">
                                <a href="#home" className="hover:text-white transition">Home</a>
                                <a href="#projects" className="hover:text-white transition">About</a>
                                <a href="#about" className="hover:text-white transition">Experience</a>
                                <a href="#contact" className="hover:text-white transition">Projects</a>
                            </div>

                            <div className="flex justify-center space-x-5 mb-6">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                                    <FaFacebook size={20} />
                                </a>
                                <a href="mailto:youremail@example.com" className="hover:text-white transition">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="mailto:youremail@example.com" className="hover:text-white transition">
                                    <FaLinkedin size={20} />
                                </a>
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

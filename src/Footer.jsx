import { FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer({ className }) {
    const name = 'Shenesis Eumague';
    const position = 'Full-stack Developer | Freelancer | Virtual Assistant';

    return (
        <>
            <section className="items-center mt-10 bg-gray-800" data-aos="fade-up">
                <div className={className}>
                    <footer className="text-gray-200">
                        <div className="max-w-5xl mx-auto text-center">
                        
                            <h2 className="text-2xl font-bold mb-4">{name}</h2>
                            <p className="text-gray-400 text-sm mb-4">
                                {position}
                            </p>

                            <div className="text-xs text-gray-500">
                            © {new Date().getFullYear()}. All rights reserved.
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer;

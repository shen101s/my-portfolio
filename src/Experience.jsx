import { LuCircleStop } from "react-icons/lu";

function Experience({ className }) {
   const timelineData = [
    { 
        title: "Information System Analyst II", 
        duration: "Feb 2018 - Present",
        company: "Department of Health-Eastern Visayas (DOHEVCHD)",
        description: [
            'Designed, developed and maintained in-house information systems including the official website of DOH-Eastern Visayas.',
            'Developed 15 web applications & 1 mobile application following Agile development methodologies.',
            'Oversaw the development of in-house application and workflows.',
            'Centralized all the databases and performed database optimization.',
            'Troubleshoot code-related issues and defects.',
            'Performed database back-up and recovery procedure.',
            'Environment: PHP (CodeIgniter, Laravel), JQuery, JavaScript, Bootstraps, CSS, MySQL, MSSQL, Java',
        ]
    },
    { 
        title: "Web Developer (Freelance)", 
        duration: "Oct 2021 - Nov 2021",
        company: "JBG-Solutions Incorporated",
        description: [
            'Development of front-end and back-end academic profile modules (Student & Personnel Portal & Reports).',
            'Environment: PHP (Laravel), JQuery, JavaScript, Bootstraps, CSS, MySQL, GIT, AWS',
        ]
    },
    { 
        title: "Computer Programmer I", 
        duration: "Oct 2016 – Dec 2017",
        company: "National Maritime Polytechnic (NPM)",
        description: [
            'Developed desktop application for attendance tracking system using Digital Persona U.are.U 4500 fingerprint scanner and web application for viewing and printing the DTR.',
            'Designed and created the database up to the third normalization form.',
            'Environment: PHP (CodeIgniter, Laravel), JQuery, JavaScript, Bootstraps, CSS, MySQL, Java',
        ]
    },
    { 
        title: "PHP Programmer", 
        duration: "Oct 2015 – Mar 2016",
        company: "Cebu Pripress Center Inc.",
        description: [
            'DWrote frontend and backend code to build efficient PHP modules to improve the system.',
            'Collaborated with developers to define process flows and software solutions.',
            'Environment: PHP (Laravel), JQuery, JavaScript, Bootstraps, CSS, MySQL, PostgreSQL',
        ]
    },
  ];
    return (
        <>
            <section className="items-center mt-10 bg-white" id="experience" data-aos="fade-up">
                <div className={className}>
                    <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-600 mb-4 text-center 
                        before:content-[''] before:absolute before:block before:w-40 before:h-px before:bg-gray-600/40 before:left-0 before:right-0 before:bottom-0 before:mx-auto before:mb-[-16px]
                        after:content-[''] after:absolute after:block after:w-16 after:h-[3px] after:bg-cyan-600/60 after:left-0 after:right-0 after:bottom-0 after:mx-auto after:mb-[-17px]
                        ">
                        Experience
                    </h2>

                    <div className="mt-15">
                        <p className="text-center">
                            Proficient in a wide range of technologies and tools, with the ability to 
                            learn new skills quickly and apply them effectively.
                        </p>
                    </div>

                    <div className="mx-auto h-full p-8 m-0">
                        <ol className="relative border-s border-cyan-700">
                            {timelineData.map((timeline, index) => (
                                <li key={index} className="mb-10 ms-10">  
                                    <LuCircleStop className="w-10 h-10 absolute flex items-center justify-center bg-white -start-5 text-cyan-600 p-0" />
                                    
                                    <h3 className="flex items-center text-lg font-semibold">{timeline.title}</h3>
                                    <time className="block font-thin text-gray-800">{timeline.duration}</time>
                                    <time className="block mb-2 font-thin text-gray-800">{timeline.company}</time>

                                    <ul className="list-disc list-inside text-gray-800">
                                        {timeline.description?.map((desc, index1) => (
                                            <li key={index1}>{desc}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}  
                        </ol>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;

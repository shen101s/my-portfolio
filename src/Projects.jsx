import DTS from './assets/projects/dts.png';
import MDTR from './assets/projects/mdtr.png';
import IMIS from './assets/projects/imis.png';
import ATS from './assets/projects/ats.png';
import DMIS from './assets/projects/dmis.png';
import HRMS from './assets/projects/hris.png';
import OSRS from './assets/projects/osris.png';
import VETCLINIC from './assets/projects/vetclinic.png';

function Projects({ className }) {
    const projects = [
        {
            src: DTS,
            title: 'Document Tracking System'
        }, 
        {
            src: IMIS,
            title: 'Inventory Management Information System'
        },
        {
            src: HRMS,
            title: 'Human Resource Management Information System'
        },
        {
            src: MDTR,
            title: 'Mobile DTR'
        },
        {
            src: VETCLINIC,
            title: 'Veterinary Information System'
        },
        {
            src: OSRS,
            title: 'Online Service Request System'
        },
        {
            src: ATS,
            title: 'Attendance Tracking System'
        },
        {
            src: DMIS,
            title: 'Dormitory Management Information System'
        },
    ];
    return (
        <>
            <section className="items-center mt-10" id="projects" data-aos="fade-up">
                <div className={className}>
                    <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-600 mb-4 text-center 
                        before:content-[''] before:absolute before:block before:w-40 before:h-px before:bg-gray-600/40 before:left-0 before:right-0 before:bottom-0 before:mx-auto before:mb-[-16px]
                        after:content-[''] after:absolute after:block after:w-16 after:h-[3px] after:bg-cyan-600/60 after:left-0 after:right-0 after:bottom-0 after:mx-auto after:mb-[-17px]
                        ">
                        Projects
                    </h2>

                    <div className="mt-15 mb-10">
                        <p className="text-center">
                            List of projects and titles showcasing development work and achievements.
                        </p>
                    </div>

                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group bg-gray-100 mb-6 break-inside-avoid">
                                <img src={project.src} alt="Image 1" className="w-full object-contain transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm" />
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                                {/* Title at center on hover */}
                                <p className="absolute inset-0 flex text-center items-center justify-center p-5 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {project.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;

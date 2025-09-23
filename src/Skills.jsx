
function Skills({ className }) {
    const skills = [
        { title: 'PHP', percent: '90' },
        { title: 'Laravel', percent: '90' },
        { title: 'CodeIgniter', percent: '90' },

        { title: 'Java', percent: '80' },
        { title: 'JavaScript', percent: '90' },
        { title: 'jQuery', percent: '90' },

        { title: 'Vue', percent: '80' },
        { title: 'React', percent: '80' },
        { title: 'Node', percent: '80' },

        { title: 'Express', percent: '80' },
        { title: 'MySQL', percent: '90' },
        { title: 'MSSQL', percent: '80' },

        { title: 'HTML', percent: '100' },
        { title: 'CSS', percent: '80' },
        { title: 'Bootsrap', percent: '90' },        
    ];
    return (
        <>
        <section className="items-center mt-10">
            <div className={className}>
                <h2 className="relative text-2xl md:text-3xl font-semibold text-gray-600 mb-4 text-center 
                    before:content-[''] before:absolute before:block before:w-40 before:h-px before:bg-gray-600/40 before:left-0 before:right-0 before:bottom-0 before:mx-auto before:mb-[-16px]
                    after:content-[''] after:absolute after:block after:w-16 after:h-[3px] after:bg-blue-700/60 after:left-0 after:right-0 after:bottom-0 after:mx-auto after:mb-[-17px]
                    ">
                    Skills
                </h2>

                <div className="mt-15">
                    <p className="text-center">
                        Proficient in a wide range of technologies and tools, with the ability to 
                        learn new skills quickly and apply them effectively.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {skills.map((skill, index) => (
                        <div key={index} className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">{skill.title}</span>
                                <span className="text-sm font-medium text-gray-700">{skill.percent}%</span>
                                </div>
                                <div className="w-full bg-gray-200 h-4 rounded">
                                <div
                                    className="bg-cyan-600 h-4 rounded"
                                    style={{ width: `${skill.percent}%` }}
                                ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills;

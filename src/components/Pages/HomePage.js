import { motion } from "framer-motion"
import { shimmerVariants, bounceVariants } from "../../styles/specialEffects"
import { langauageAndScriptingSkills, libraryAndFrameworkSkills, backendSkills, databaseSkills, developerToolSkills } from "../UI/Skills"

export const HomePage = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start min-h-screen text-left sm:pl-8 md:pl-16 lg:pl-20 pt-20 sm:pt-24 md:pt-28 lg:pt-36">
                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold mb-4" animate={shimmerVariants.animate} transition={shimmerVariants.transition} style={shimmerVariants.style}>Hi! I'm Vidhi</motion.h1>
                <motion.p className="text-3xl sm:text-4xl md:text-5xl  text-[#9374e8] opacity-80" animate={bounceVariants.animate} transition={bounceVariants.transition}>A FULLSTACK DEVELOPER</motion.p>
                <h1 className="text-4xl sm:text:5xl md:text-6xl lg:text-7xl text-white font-semibold mt-64">Skills</h1>
                <div className="space-y-8 mt-8">
                    <div>
                    <p className="text-3xl sm:text:4xl md:text-5xl text-white font-semibold mb-4">Languages and Scripting</p>
                        <div className="flex flex-wrap gap-5">
                            {langauageAndScriptingSkills.map(skill => (
                                <span className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                    <p className="text-3xl sm:text:4xl md:text-5xl text-white font-semibold mb-4">Libraries and Frameworks</p>
                        <div className="flex flex-wrap gap-5">
                            {libraryAndFrameworkSkills.map(skill => (
                                <span className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                    <p className="text-3xl sm:text:4xl md:text-5xl text-white font-semibold mb-4">Backend</p>
                        <div className="flex flex-wrap gap-5">
                            {backendSkills.map(skill => (
                                <span className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                    <p className="text-3xl sm:text:4xl md:text-5xl text-white font-semibold mb-4">Databases</p>
                        <div className="flex flex-wrap gap-5">
                            {databaseSkills.map(skill => (
                                <span className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                    <p className="text-3xl sm:text:4xl md:text-5xl text-white font-semibold mb-4">Developer Tools</p>
                        <div className="flex flex-wrap gap-5">
                            {developerToolSkills.map(skill => (
                                <span className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
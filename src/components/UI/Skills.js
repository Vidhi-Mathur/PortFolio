import HTML from "../../assets/skills/HTML.svg"
import CSS from "../../assets/skills/CSS.svg"
import Javascript from "../../assets/skills/Javascript.svg"
import Bootstrap from "../../assets/skills/BootStrap.svg"
import Java from "../../assets/skills/Java.svg"
import ReactJS from "../../assets/skills/ReactJS.svg"
import ReactRouterDom from "../../assets/skills/React-Router-Dom.svg"
import Redux from "../../assets/skills/Redux.svg"
import NextJS from "../../assets/skills/NextJS.svg"
import MaterialUI from "../../assets/skills/Material-UI.svg"
import TailwindCSS from "../../assets/skills/Tailwind-CSS.svg"
import FramerMotion from "../../assets/skills/Framer-Motion.svg"
import NodeJS from "../../assets/skills/NodeJS.svg"
import ExpressJS from "../../assets/skills/ExpressJS.svg"
import SocketIO from "../../assets/skills/SocketIO.svg"
import MongoDB from "../../assets/skills/MongoDB.svg"
import Git from "../../assets/skills/Git.svg"
import Postman from "../../assets/skills/Postman.svg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { elasticVariants } from "../../styles/specialEffects"

const langauageAndScriptingSkills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS},
    { name: 'Javascript', icon: Javascript},
    { name: 'Java', icon: Java},
]

const libraryAndFrameworkSkills = [
    { name: 'Bootstrap', icon: Bootstrap},
    { name: 'ReactJS', icon: ReactJS },
    { name: 'React Router Dom', icon: ReactRouterDom },
    { name: 'Redux', icon: Redux },
    { name: 'NextJS', icon: NextJS },
    { name: 'Material UI', icon: MaterialUI},
    { name: 'Tailwind CSS', icon: TailwindCSS},
    { name: 'Framer Motion', icon: FramerMotion },
]

 const backendSkills = [
    { name: 'NodeJS', icon: NodeJS},
    { name: 'ExpressJS', icon: ExpressJS },
    { name: 'Socket.io', icon: SocketIO },
]

 const databaseSkills = [
    { name: 'MongoDB', icon: MongoDB}
]

 const developerToolSkills = [
    { name: 'Version Control', icon: Git},
    { name: 'Postman', icon: Postman}
]

export const Skills = () => {
    return (
        <div className="container mx-auto text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold lg:mt-64 mt-40">Skills</h1>
            <div className="space-y-8 mt-8">
                    <SkillSection title="Languages and Scripting" skills={langauageAndScriptingSkills} />
                    <SkillSection title="Libraries and Frameworks" skills={libraryAndFrameworkSkills} />
                    <SkillSection title="Backend" skills={backendSkills} />
                    <SkillSection title="Databases" skills={databaseSkills} />
                    <SkillSection title="Developer Tools" skills={developerToolSkills} />
            </div>
        </div>
    )
}

const SkillSection = ({title, skills}) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    })
    return (
        <motion.div ref={ref}>
        <p className="text-2xl sm:text:3xl md:text-4xl text-[#bdaee3] font-semibold mb-5 ">{title}</p>
            <motion.div className="flex flex-wrap gap-5">
                {skills.map((skill, index) => (
                    <motion.span key={skill.name} className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2" initial="hidden" animate={inView? "visible": "hidden"} index={index} variants={elasticVariants} whileHover="hover"><img src={skill.icon} alt="alt" className="w-10 h-10 object-contain"/>{skill.name}</motion.span>
                ))}
            </motion.div>
        </motion.div>
    )
}
import HTML from "../../assets/skills/HTML.svg"
import CSS from "../../assets/skills/CSS.svg"
import Javascript from "../../assets/skills/Javascript.svg"
import Bootstrap from "../../assets/skills/BootStrap.svg"
import Java from "../../assets/skills/Java.svg"
import ReactJs from "../../assets/skills/ReactJs.svg"
import ReactRouterDom from "../../assets/skills/ReactRouterDom.svg"
import Redux from "../../assets/skills/Redux.svg"
import NextJs from "../../assets/skills/NextJs.svg"
import MaterialUI from "../../assets/skills/MaterialUI.svg"
import TailwindCSS from "../../assets/skills/TailwindCSS.svg"
import FramerMotion from "../../assets/skills/FramerMotion.svg"
import NodeJs from "../../assets/skills/NodeJs.svg"
import ExpressJs from "../../assets/skills/ExpressJs.svg"
import SocketIO from "../../assets/skills/SocketIO.svg"
import MongoDB from "../../assets/skills/MongoDB.svg"
import Git from "../../assets/skills/Git.svg"
import Postman from "../../assets/skills/Postman.svg"
import Docker from "../../assets/skills/Docker.svg"
import PostgreSQL from "../../assets/skills/Postgresql.svg"
import Prisma from "../../assets/skills/Prisma.svg"
import Mongoose from "../../assets/skills/Mongoose.svg"
import Shadcn from "../../assets/skills/Shadcn.svg"
import Typescript from "../../assets/skills/Typescript.svg"
import TanstackQuery from "../../assets/skills/TanstackQuery.svg"
import Redis from "../../assets/skills/Redis.svg"
import NextAuth from "../../assets/skills/NextAuth.svg"
import Zod from "../../assets/skills/Zod.svg"
import RestApi from "../../assets/skills/RestApi.svg"
import GraphQL from "../../assets/skills/GraphQL.svg"
import Jest from "../../assets/skills/Jest.svg"
import RTL from "../../assets/skills/RTL.svg"
import Supertest from "../../assets/skills/Supertest.svg"
import Cypress from "../../assets/skills/Cypress.svg"
import EC2 from "../../assets/skills/EC2.svg"
import S3 from "../../assets/skills/S3.svg"
import GitHubActions from "../../assets/skills/GitHubActions.svg"
import Kubernetes from "../../assets/skills/Kubernetes.svg"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { elasticVariants } from "../../styles/specialEffects"

const langauageSkills = [
    { name: 'TypeScript', icon: Typescript},
    { name: 'JavaScript', icon: Javascript},
    { name: 'Java', icon: Java},
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS},
]

const frameworkAndLibrarySkills = [
    { name: 'Next.js', icon: NextJs },
    { name: 'React.js', icon: ReactJs },
    { name: "TanStack Query", icon: TanstackQuery },
    { name: 'Zod', icon: Zod },
    { name: 'Tailwind CSS', icon: TailwindCSS },
    { name: 'Shadcn', icon: Shadcn },
    { name: 'Material UI', icon: MaterialUI },
    { name: 'Redux', icon: Redux },
    { name: 'React Router DOM', icon: ReactRouterDom },
    { name: 'Bootstrap', icon: Bootstrap },
    { name: 'Framer Motion', icon: FramerMotion }
]

const backendSkills = [
    { name: 'Node.js', icon: NodeJs },
    { name: 'Express.js', icon: ExpressJs },
    { name: 'REST APIs', icon: RestApi },
    { name: 'NextAuth', icon: NextAuth },
    { name: 'GraphQL', icon: GraphQL },
    { name: 'Socket.io', icon: SocketIO }
]

const databaseSkills = [
    { name: 'MongoDB', icon: MongoDB },
    { name: 'Mongoose', icon: Mongoose },
    { name: 'PostgreSQL', icon: PostgreSQL },
    { name: 'Prisma', icon: Prisma },
    { name: 'Redis', icon: Redis },
]

const testingSkills = [
  { name: "Jest", icon: Jest },
  { name: "React Testing Library", icon: RTL },
  { name: "Supertest", icon: Supertest },
  { name: "Cypress", icon: Cypress }
]


const toolsAndDevOpsSkills = [
    { name: 'Version Control', icon: Git},
    { name: 'Postman', icon: Postman},
    { name: 'Docker', icon: Docker},
    { name: "AWS (EC2)", icon: EC2 },
    { name: "AWS (S3)", icon: S3 },
    { name: "GitHub Actions", icon: GitHubActions },
    { name: "Kubernetes (Basics)", icon: Kubernetes }
]

export const Skills = () => {
    return (
        <div className="container mx-auto text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold lg:mt-64 mt-40">Skills</h1>
            <div className="space-y-8 mt-8">
                    <SkillSection title="Languages" skills={langauageSkills} />
                    <SkillSection title="Frameworks & Libraries" skills={frameworkAndLibrarySkills} />
                    <SkillSection title="Backend" skills={backendSkills} />
                    <SkillSection title="Databases" skills={databaseSkills} />
                    <SkillSection title="Testing" skills={testingSkills} />
                    <SkillSection title="Tools & DevOps" skills={toolsAndDevOpsSkills} />
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
        <p className="text-2xl sm:text-3xl md:text-4xl text-[#bdaee3] font-semibold mb-5 ">{title}</p>
            <motion.div className="flex flex-wrap gap-5">
                {skills.map((skill, index) => (
                    <motion.span key={skill.name} className="bg-white text-xl font-semibold px-6 py-1.5 rounded flex items-center justify-center gap-2" initial="hidden" animate={inView? "visible": "hidden"} index={index} variants={elasticVariants} whileHover="hover"><img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain"/>{skill.name}</motion.span>
                ))}
            </motion.div>
        </motion.div>
    )
}
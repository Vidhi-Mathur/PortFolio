import { motion } from "framer-motion"
import { shimmerVariants, bounceVariants } from "../../styles/specialEffects"
import { Skills } from "../UI/Skills"
import { ProjectInfo } from "../UI/ProjectInfo"
import { useEffect, useState } from "react"
import { TypewriterText } from "../UI/TypeWriterText"
import { ScrollArrow } from "../UI/Scroll"

export const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-center sm:pl-8 md:pl-16 lg:pl-20 pt-20 sm:pt-24 md:pt-28 lg:pt-36">
            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold mb-4" animate={shimmerVariants.animate} transition={shimmerVariants.transition} style={shimmerVariants.style}>Vidhi Mathur</motion.h1>
            <motion.p className="text-3xl sm:text-3xl md:text-4xl  text-[#9374e8] opacity-80" animate={bounceVariants.animate} transition={bounceVariants.transition}>A FULLSTACK DEVELOPER</motion.p>
            {isVisible && <TypewriterText text="Transforming ideas into intuitive digital experience through code and creativity" />}
            <ScrollArrow />
            <div id="skills">
                <Skills />
            </div>
            <ProjectInfo />
        </div>
    )
}
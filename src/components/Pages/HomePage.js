import { motion } from "framer-motion"
import { shimmerVariants, bounceVariants } from "../../styles/specialEffects"
import { Skills } from "../UI/Skills"

export const HomePage = () => {
    return (
        <>
            <div className="flex flex-col justify-start items-start min-h-screen text-left sm:pl-8 md:pl-16 lg:pl-20 pt-20 sm:pt-24 md:pt-28 lg:pt-36">
                <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold mb-4" animate={shimmerVariants.animate} transition={shimmerVariants.transition} style={shimmerVariants.style}>Hi! I'm Vidhi</motion.h1>
                <motion.p className="text-3xl sm:text-4xl md:text-5xl  text-[#9374e8] opacity-80" animate={bounceVariants.animate} transition={bounceVariants.transition}>A FULLSTACK DEVELOPER</motion.p>
                <Skills />
            </div>
        </>
    )
}
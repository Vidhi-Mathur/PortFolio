import { motion } from "framer-motion"
import { typewriterVariants } from "../../styles/specialEffects"

export const TypewriterText = ({ text }) => {
    const characters = text.split("")
    return (
      <motion.div className="text-center text-white text-lg sm:text-xl md:text-2xl mt-8 max-w-4xl" variants={typewriterVariants.container} initial="hidden" animate="visible">
        {characters.map((char, index) => (
            <motion.span key={index} variants={typewriterVariants.child}>{char}</motion.span>
        ))}
      </motion.div>
    )
}
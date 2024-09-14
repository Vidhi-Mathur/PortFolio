import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { drawVariants } from "../../styles/specialEffects"

export const ScrollArrow = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    const scrollToSkills = () => {
        const skillsSection = document.getElementById('skills')
        if(skillsSection) {
            skillsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
    <motion.div className="mt-16 cursor-pointer" onClick={scrollToSkills} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {isVisible && (
            <motion.svg width="50" height="50" viewBox="0 0 60 60" initial="hidden" animate="visible">
              <motion.circle cx="30" cy="30" r="28" stroke="#9374e8" strokeWidth="2" fill="none" variants={drawVariants} custom={0} />
              <motion.path d="M30 15 L30 45 M20 35 L30 45 L40 35" stroke="#9374e8" strokeWidth="2" fill="none" variants={drawVariants} custom={1}/>
            </motion.svg>
        )}
    </motion.div>
  )
}
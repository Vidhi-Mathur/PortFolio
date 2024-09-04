import { motion } from 'framer-motion'
import GitHub from "../../assets/about/GitHub.svg"
import GeeksFromGeeks from "../../assets/about/GeeksForGeeks.png"
import LeetCode from "../../assets/about/LeetCode.svg"

const aboutItems = [
    { icon: GitHub, alt: "GitHub", link: "https://github.com/Vidhi-Mathur" },
    { icon: LeetCode, alt: "LeetCode", link: "https://leetcode.com/u/VidhiMathur/" },
    { icon: GeeksFromGeeks, alt: "GeeksForGeeks", link: "https://www.geeksforgeeks.org/user/mathurvidhi/" },
]

export const AboutPage = () => {
    return (
        <div className="h-screen text-white p-8 flex flex-col items-center justify-start pt-28">
            <motion.h1  className="ttext-4xl md:text-6xl font-bold mb-12 text-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                Check my profiles
            </motion.h1>
            <motion.div className="flex gap-8 items-center justify-center"initial="hidden"animate="visible"variants={{    hidden: { opacity: 0 },    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 }}}}>
                {aboutItems.map(about => (
                    <motion.a key={about.alt} href={about.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center"variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 }}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <motion.div className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center overflow-hidden" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                            <img className="w-14 h-14" src={about.icon} alt={about.alt} />
                        </motion.div>
                        <motion.span className="mt-4 text-md font-semibold"initial={{ opacity: 0 }}animate={{ opacity: 1 }}transition={{ delay: 1 }}>
                            {about.alt}
                        </motion.span>
                    </motion.a>
                ))}
            </motion.div>
        </div>
    )
}
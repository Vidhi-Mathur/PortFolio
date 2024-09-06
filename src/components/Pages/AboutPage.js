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
        <div className="h-screen text-white p-8 flex flex-col items-center justify-start pt-28 mb-48">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-16">
                    <motion.div className="md:w-1/2 mb-8 md:mb-0" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Glad we met!</h1>
                        <p className="text-lg leading-relaxed">
                            Hi, I'm Vidhi—an enthusiastic web developer with a passion for building engaging and responsive applications. I combine technical expertise with creative problem-solving to deliver efficient, secure, and impactful digital solutions.
                        </p>
                        <p className="text-lg leading-relaxed">
                            My recent projects demonstrate my proficiency in JavaScript, React.js, Node.js, and more.
                        </p>
                        <motion.a whileHover={{ scale: 1.1, backgroundColor: "#8B5CF6" }} href="https://drive.google.com/file/d/1O3Ae16s-cCD-zbGtgbgcxItU0JjOvxSz/view?usp=drive_link" className="mt-6 cursor-pointer bg-purple-600 text-xl font-semibold py-1.5 rounded flex items-center justify-center w-48" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </motion.a>
                    </motion.div>
                    <motion.div className="md:w-1/3" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
                        <img src={GitHub} className="w-full h-auto min-w-52 max-w-72 sm:max-w-xs mx-auto" alt="GitHub"/>
                    </motion.div>
                </div>
                <motion.h2 className="text-4xl md:text-6xl font-bold mb-12 text-center relative"initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}>
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        Check my profiles
                    </span>
                    <span className="sr-only">Check my profiles</span>
                </motion.h2>
                <motion.div className="flex gap-8 items-center justify-center" initial="hidden" animate="visible" variants={{    hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 }}}}>
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
        </div>
    )
}
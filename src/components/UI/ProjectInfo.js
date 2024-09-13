import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flipVariants, pieceVariants, shatterPieces, shatterVariants } from "../../styles/specialEffects";
import { IconButton } from "@mui/material";
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import EatWaveImg from "../../assets/projects/EatWave.png"
import ExpenseTrackerImg from "../../assets/projects/ExpenseTracker.png"
import MyPlaceImg from "../../assets/projects/MyPlaces.png"

const projectList = [
    {
        name: "Eatwave",
        intro: "A full-fledged food delivery application",
        techUsed: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
        image: EatWaveImg
    },
    {
        name: "MyPlaces",
        intro: "Mock social media application to share geolocation based pictures",
        techUsed: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
        image: MyPlaceImg
    },
    {
        name: "ExpenseTracker",
        intro: "Intuitive expense tracker to track, and filter your daily expenses",
        techUsed: "React.js, Tailwind CSS",
        image: ExpenseTrackerImg
    }
]

export const ProjectInfo = () => {
    const [currIdx, setCurrIdx] = useState(0);
    const [darkMode, setDarkMode] = useState(true)

    //Initial render dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } 
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    const nextProjectHandler = () => {
        setCurrIdx((prev) => (prev + 1) % projectList.length)
    }

    const themeToggler = (event) => {
        event.stopPropagation()
        setDarkMode(prevState => !prevState)
        document.documentElement.classList.toggle("dark", !darkMode)

    }

    return (
        <div className="container mx-auto px-4 sm:px-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-12 sm:mt-24 md:mt-36 mb-8 sm:mb-16 md:mb-24">My Projects</h1>
            <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
                <AnimatePresence mode="wait">
                    <motion.div key={projectList[currIdx].name} initial={flipVariants.initial} animate={flipVariants.animate} exit={flipVariants.exit} transition={flipVariants.transition} style={flipVariants.style} className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg w-full lg:w-6/12 h-auto lg:h-96" onClick={nextProjectHandler}>
                        <div className="bg-[#f0f0f0] dark:bg-[#323233] px-4 py-2 flex items-center justify-between">
                            <span className="text-[#333] dark:text-[#cccccc] font font-medium">{projectList[currIdx].name}.js</span>
                            <div className="flex space-x-2">
                                <IconButton onClick={themeToggler} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                                    {darkMode? <LightModeTwoToneIcon />: <DarkModeTwoToneIcon />}
                                </IconButton>
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <p className="text-green-800 dark:text-green-300 mb-2">//Click to see next, many more in "/projects"!</p>
                            <p className="text-[#0366d6] dark:text-[#569cd6] mb-2">
                                const <span className="text-[#005cc5] dark:text-[#4fc1ff]">{projectList[currIdx].name}</span> = <span className="text-[#005cc5] dark:text-[#ffbd44]">{'{'}</span>
                            </p>
                            <p className="text-[#24292e] dark:text-[#9cdcfe] ml-4 mb-2">
                                name: <span className="text-red-500 dark:text-[#ce9178]">"{projectList[currIdx].name}"</span><span className="text-black dark:text-white">,</span>
                            </p>
                            <p className="text-[#24292e] dark:text-[#9cdcfe] ml-4 mb-2">
                                intro: <span className="text-red-500 dark:text-[#ce9178]">"{projectList[currIdx].intro}"</span><span className="text-black dark:text-white">,</span>
                            </p>
                            <p className="text-[#24292e] dark:text-[#9cdcfe] ml-4">techUsed: <span className="text-purple-500">{'['}</span></p>
                                {projectList[currIdx].techUsed.split(', ').map((tech, i, arr) => (
                                    <span key={tech} className="ml-8 text-red-500 dark:text-[#ce9178]">"{tech}"{i < arr.length - 1 && (
                                        <span className="text-black dark:text-white">,</span>
                                    )}<br /></span>
                                ))}
                            <p className="text-[#6f42c1] dark:text-purple-500 ml-4">{']'}</p>
                            <p className="text-black dark:text-white"><span className="text-[#005cc5] dark:text-[#ffbd44]">{'}'}</span>;</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                    <motion.div key={projectList[currIdx].name} variants={shatterVariants} initial="initial" animate="animate" exit="exit" className="w-full lg:w-5/12 relative" style={{ aspectRatio: '3 / 2' }}>
                        {[...Array(shatterPieces)].map((_, i) => (
                            <motion.div key={i} custom={i} variants={pieceVariants} className="absolute" style={{ 
                                backgroundImage: `url(${projectList[currIdx].image})`, 
                                backgroundSize: '400% 400%', 
                                backgroundPosition: `${(i % 4) * 33.33}% ${Math.floor(i / 4) * 33.33}%`, 
                                width: `${100 / 4}%`, 
                                height: `${100 / 4}%`, 
                                top: `${Math.floor(i / 4) * 25}%`, 
                                left: `${(i % 4) * 25}%`,
                            }}/>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};


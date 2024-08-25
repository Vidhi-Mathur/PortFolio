import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { flipVariants } from "../../styles/specialEffects";
import { IconButton } from "@mui/material";
import LightModeTwoToneIcon from '@mui/icons-material/LightModeTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

const projectList = [
    {
        name: "Eatwave",
        intro: "A full-fledged food delivery application",
        techUsed: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS"
    },
    {
        name: "MyPlaces",
        intro: "Mock social media application to share geolocation based pictures",
        techUsed: "React.js, Node.js, Express.js, MongoDB, Tailwind CSS",
    },
    {
        name: "ExpenseTracker",
        intro: "Intuitive expense tracker to track, and filter your daily expenses",
        techUsed: "React.js, Tailwind CSS"
    }
];

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
        <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-36">My Projects</h1>
        <div className="space-y-16 mt-16 sm:w-10/12 md:w-8/12 lg:w-6/12 sm:h-auto md:h-96 lg:h-96 mb-24">
            <AnimatePresence mode="wait">
                <motion.div key={projectList[currIdx].name} initial={flipVariants.initial} animate={flipVariants.animate} exit={flipVariants.exit} transition={flipVariants.transition} style={flipVariants.style} className="bg-white dark:bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg h-full" onClick={nextProjectHandler}>
                    <div className="bg-[#f0f0f0] dark:bg-[#323233] px-4 py-2 flex items-center justify-between">
                        <span className="text-[#333] dark:text-[#cccccc] font font-medium">{projectList[currIdx].name}.js</span>
                        <div className="flex space-x-2">
                            <IconButton onClick={themeToggler} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                                {darkMode? <LightModeTwoToneIcon />: <DarkModeTwoToneIcon />}
                            </IconButton>
                        </div>
                    </div>
                    <div className="p-6 font-mono text-sm">
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
        </div>
        </>
    );
};


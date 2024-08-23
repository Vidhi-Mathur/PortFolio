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
    return (
        <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-semibold mt-36">My Projects</h1>
        <div className="space-y-16 mt-16">
                {projectList.map((project) => (
                    <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-[#323233] px-4 py-2 flex items-center justify-between">
                            <span className="text-[#cccccc] font font-medium">{project.name}.js</span>
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm">
                            <p className="text-[#569cd6] mb-2">
                                const <span className="text-[#4fc1ff]">{project.name}</span> = <span className="text-[#ffbd44]">{'{'}</span>
                            </p>
                            <p className="text-[#9cdcfe] ml-4 mb-2">
                                name: <span className="text-[#ce9178]">"{project.name}"</span><span className="text-white">,</span>
                            </p>
                            <p className="text-[#9cdcfe] ml-4 mb-2">
                                intro: <span className="text-[#ce9178]">"{project.intro}"</span><span className="text-white">,</span>
                            </p>
                            <p className="text-[#9cdcfe] ml-4">techUsed: <span className="text-purple-500">{'['}</span></p>
                                {project.techUsed.split(', ').map((tech, i, arr) => (
                                    <span key={tech} className="ml-8 text-[#ce9178]">"{tech}"{i < arr.length - 1 ? ',' : ''}<br /></span>
                                ))}
                            <p className="text-purple-500 ml-4">{']'}</p>
                            <p className="text-white"><span className="text-[#ffbd44]">{'}'}</span>;</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


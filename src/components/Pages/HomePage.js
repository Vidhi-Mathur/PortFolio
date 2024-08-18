import "../../styles/specialeffects.css"
export const HomePage = () => {
    return (
        <div className="flex flex-col justify-start items-start min-h-screen text-left pl-20 pt-36">
            <h1 className="text-9xl text-white font-bold mb-4 shimmer-effect">Hi! I'm Vidhi</h1>
            <p className="text-5xl text-[#9374e8] opacity-80 animate-bounce-effect">A FULLSTACK DEVELOPER</p>
        </div>
    )
}
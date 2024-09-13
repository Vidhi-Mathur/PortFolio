import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';

export const Layout = ({ children }) => {
    return (
        <div className="relative h-screen overflow-hidden">
            <div className="fixed inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
                <img src={Logo} alt="V Symbol" className="h-16 w-16 absolute top-8 left-8 z-10"/>
                <NavigationBar />
                <div className="h-full overflow-y-auto px-5 py-24 hide-scrollbar">
                    {children}
                </div>
        </div>
    );
};

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavigationBar = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <>
            <button onClick={toggleNavigationBar} className="fixed right-8 top-12 md:hidden z-10" ><MenuIcon sx={{ color: 'white', fontSize: 28 }} /></button>
            {/* Small screen */}
            <nav className={`fixed top-0 left-0 w-full h-full bg-black text-white rounded-lg bg-opacity-50 backdrop-blur-md transform ${isOpen? 'translate-x-0': 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden flex justify-center items-center z-20`}>
                <div className="flex flex-col items-center space-y-8 mb-56">
                    <NavLink to="/" className={({isActive}) => `block px-6 py-2 rounded-full ${isActive ? 'bg-violet-900 font-semibold' : ''}`} onClick={toggleNavigationBar}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => `block px-6 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`} onClick={toggleNavigationBar}>About</NavLink>
                    <NavLink to="/projects" className={({isActive}) => `block px-6 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`} onClick={toggleNavigationBar}>Projects</NavLink>
                    <NavLink to="/contact" className={({isActive}) => `block px-6 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`} onClick={toggleNavigationBar}>Contact</NavLink>
                </div>
            </nav>
            {/* Large screen */}
            <nav className="hidden md:block fixed top-8 left-1/2 transform -translate-x-1/2 md:border md:border-white rounded-full z-20">
                <div className="flex items-center bg-black rounded-full shadow-md p-4 text-white bg-opacity-60 backdrop-blur-md" style={{
                    boxShadow: '0 0 20px 5px rgba(99, 99, 238, 0.5)',
                    backgroundImage: 'radial-gradient(circle, rgba(99,99,238,0.2), transparent 70%)'
                }}>
                    <NavLink to="/" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-900 font-semibold' : ''} hover:scale-110`}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>About</NavLink>
                    <NavLink to="/projects" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>Projects</NavLink>
                    <NavLink to="/contact" className={({isActive}) => `px-10 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>Contact</NavLink>
                </div>
            </nav>
        </>
    )
}

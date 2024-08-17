import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const Layout = ({ children }) => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
            <img src={Logo} alt="V Symbol" className="h-16 w-16 absolute top-8 left-8"/>
            <NavigationBar />
            <div>{children}</div>
        </div>
    );
};

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavigationBar = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 md:border md:border-white rounded-full">
            <div className="flex justify-between items-center md:hidden">
                <button onClick={toggleNavigationBar}>{isOpen ? <CloseIcon sx={{ color: 'white' }} className="absolute right-2 top-4"/> : <MenuIcon sx={{ color: 'white' }} className="absolute right-2 top-4" />}</button>
            </div>
            {/* Small screen */}
            <div className={`${isOpen? 'block': 'hidden'} bg-black text-white p-4 rounded-lg md:hidden`}>
                <NavLink to="/" className={({isActive}) => `block px-4 py-2 rounded-full ${isActive ? 'bg-violet-900 font-semibold' : ''}`}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => `block px-4 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`}>About</NavLink>
                <NavLink to="/projects" className={({isActive}) => `block px-4 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => `block px-4 py-2 rounded-full ${isActive ? 'bg-violet-700 font-semibold' : ''}`}>Contact</NavLink>
            </div>
            {/* Large screen */}
            <div className="hidden md:flex md:items-center bg-black md:rounded-full md:shadow-md md:p-4 md:text-white"
                style={{
                    boxShadow: '0 0 20px 5px rgba(99, 99, 238, 0.5)',
                    backgroundImage: 'radial-gradient(circle, rgba(99,99,238,0.2), transparent 70%)'
                }}>
                <NavLink to="/" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-900 font-semibold' : ''} hover:scale-110`}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>About</NavLink>
                <NavLink to="/projects" className={({isActive}) => `px-8 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => `px-10 py-2 rounded-full transition-transform duration-300 ${isActive ? 'bg-violet-700 font-semibold' : ''} hover:scale-110`}>Contact</NavLink>
            </div>
        </nav>
    );
};

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { motion } from 'framer-motion'
import Slider from 'react-slick';
import { Arrow } from '../UI/Arrow';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const importAll = (r) => r.keys().map(r);
const eatWaveImages = importAll(require.context('../../assets/projects/EatWave', false, /\.(png|jpe?g|svg)$/));

const projects = [
  {
    title: "EatWave",
    description: "Food Ordering Application",
    date: "May 2024 - Present",
    details: "A full-fledged, responsive MERN based food delivery application, which streamlines restaurant, menu, cart, and order management. The application is designed with both the restaurant and consumer perspectives in mind. Users can add their own restaurants, complete with menus, cuisine details, and more. Consumers can view restaurant information, including photos, reviews, and menus, and track their orders in real-time. After completing an order, they can post reviews as well. This is SPA and incorporates optimization techniques like debouncing, memoization, and lazy loading.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Bcrypt", "Razorpay", "Multer", "Cloudinary", "Socket.io"],
    images: eatWaveImages,
    github: "https://github.com/Vidhi-Mathur/EatWave",
    live: "https://eat-wave.vercel.app/"
  },
  {
    title: "MyPlaces",
    description: "Photo Sharing & Location Discovery Application",
    date: "2023",
    details: "MERN application that enables users to upload, share, and explore location-based photos. The project features secure user authentication, photo upload capabilities, and geolocation tagging. An interactive map interface, allowing users to view and explore shared locations seamlessly",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Geolocation API"],
    images: eatWaveImages,
    github: "https://github.com/Vidhi-Mathur/My-Places",
    live: "/"
  },
  {
    title: "Expense Tracker",
    description: "React Expense Management Application",
    date: "2023",
    details: "React-based expense tracking application with intuitive UI/UX, allows expense logging, Year wise sorting and filtering. Data visualization of monthly expenses using chart",
    technologies: ["React", "Chart.js"],
    images: eatWaveImages,
    github: "https://github.com/Vidhi-Mathur/Expense-Tracker",
    live: "https://expense-tracker-xi-one.vercel.app/"
  }
]

export const ProjectsPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <Arrow direction="left"/>,
        nextArrow: <Arrow direction="right" />,
    }
    return (
        <div className="min-h-screen text-white p-8">
            <motion.h1 className="text-4xl font-bold mb-8 text-center mt-8" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.5 }}>
                This is what I have created till now
            </motion.h1>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, index) => (
                    <motion.div  key={index} className="bg-black/50 border border-purple-500 rounded-lg overflow-hidden flex flex-col m-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05,  boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)", transition: { duration: 0.3 }}} >
                        <div className="p-6 flex-grow">
                            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                            <p className="text-purple-300 mb-2">{project.description}</p>
                            <p className="text-sm text-purple-300 mb-4">{project.date}</p>
                            <div className="mb-4 relative">
                                <Slider {...settings}>
                                    {project.images.map((img, i) => (
                                        <div key={i} className="h-64">
                                            <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover"/>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                          <p className="pl-5 mb-4">{project.details}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="bg-purple-950 text-white text-xs px-3 py-1 rounded-full">{tech}</span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between p-4 bg-purple-900/50">
                                <motion.a href={project.github} className="flex items-center space-x-2 group"whileHover={{ scale: 1.05 }}transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <div className="bg-black rounded-full p-2 group-hover:bg-purple-700 transition-colors duration-300">
                                      <GitHubIcon className="text-purple-300 group-hover:text-white w-6 h-6" />
                                    </div>
                                    <span className="text-purple-300 group-hover:text-white transition-colors duration-300 font-semibold">
                                      GitHub
                                    </span>
                                </motion.a>
                                <motion.a href={project.live} className="flex items-center space-x-2 group"whileHover={{ scale: 1.05 }}transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                    <div className="bg-black rounded-full p-2 group-hover:bg-purple-700 transition-colors duration-300">
                                      <OpenInNewIcon className="text-purple-300 group-hover:text-white w-6 h-6" />
                                    </div>
                                    <span className="text-purple-300 group-hover:text-white transition-colors duration-300 font-semibold">
                                      Live Demo
                                    </span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      )
}
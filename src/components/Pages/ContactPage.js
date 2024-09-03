import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LinkedIn from "../../assets/contact/LinkedIn.svg"
import Gmail from "../../assets/contact/Gmail.svg"
import X from "../../assets/contact/X.svg"
import HandshakeEmoji from "../../assets/contact/Handshake.svg"

const contactItems = [
    { icon: LinkedIn, alt: "LinkedIn", link: "https://www.linkedin.com/in/vidhi-mathur-41652128b/" },
    { icon: Gmail, alt: "Gmail", link: "mailto:mathurvidhi2505@gmail.com" },
    { icon: X, alt: "X", link: "https://twitter.com/Vidhi_Mathur25" },
  ]
  
  export const ContactPage = () => {
    const [openDialog, setDialogOpen] = useState(false)

    const openDialogHandler = () => {
        setDialogOpen(true)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formValues = Object.fromEntries(formData)
        setDialogOpen(false)
        console.log(formValues)
    }

    return (
        <div className="h-screen flex flex-col items-center justify-start pt-20 p-4">
            <motion.h1  className="flex items-center text-4xl md:text-6xl font-bold text-white mb-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Let's connect <img src={HandshakeEmoji} className="h-[48px] w-[48px] mt-4 ml-3" alt="handshake"/>
            </motion.h1>
            <motion.p className="text-lg md:text-xl text-gray-300 mb-8" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                Want to know more? Feel free to reach out
            </motion.p>
            <div className="flex gap-8 items-center justify-center">
                {contactItems.map((item, index) => (
                  <motion.a key={item.alt} href={item.link} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <img className="w-16 h-16 transition-all duration-300 hover:brightness-125" src={item.icon} alt={item.alt}/>
                  </motion.a>
                ))}
            </div>
            <motion.button className="mt-28 px-14 py-3 bg-violet-900 text-white rounded-full font-semibold hover:bg-[#291a60] transition-colors duration-300 text-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={openDialogHandler}>
                Send Message
            </motion.button>
            <AnimatePresence>
                {openDialog && (
                <motion.div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <motion.div className="bg-gray-900 p-8 rounded-lg w-full max-w-md" initial={{ x: '-100%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: '100%', opacity: 0 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
                        <h2 className="text-2xl font-bold text-white mb-4">Send Message</h2>
                        <form className="space-y-4" onSubmit={submitHandler}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400">Subject</label>
                                <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button type="button" onClick={() => setDialogOpen(false)} className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-300">
                                  Cancel
                                </button>
                                <button type="submit" className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300">
                                  Send
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
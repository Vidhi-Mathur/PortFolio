//Shimmer effect
export const shimmerVariants = {
    animate: {
        backgroundPosition: ['200%', '-200%'],
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)', 'rgba(255,255,255,0)']
    },
    transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
    },
    style: {
        backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    }
}

//Bouncing effect
export const bounceVariants = {
    animate: {
        y: [0, -20, 0]
    },
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
}

//Elastic effect
export const elasticVariants = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    visible: (index) => ({
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            delay: index * 0.1,
        },
    }),
    hover: {
        scale: 1.1
    }
};

//Flip effect
export const flipVariants = {
    initial: {
        rotateY: 90
    },
    animate: {
        rotateY: 0
    },
    exit: {
        rotateY: -90
    },
    transition: {
        duration: 0.4
    },
    style: { 
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden' 
    }
}


//Typewriting effect
export const typewriterVariants = { 
    hidden: { width: '0%' }, 
    visible: {
        width: '100%', 
        transition: { 
            duration: 4, 
            ease: "easeInOut"
        } 
    } 
}

//Shatter and assemble effect
export const shatterPieces = 16

export const shatterVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.02
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1
        }
    }
}

export const pieceVariants = {
    initial: (i) => ({
        opacity: 0,
        x: (i % 4 - 1.5) * 50,
        y: (Math.floor(i / 4) - 1.5) * 50,
        rotate: Math.random()*360,
        scale: 0
    }),
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0, 
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
        }
    },
    exit: (i) => ({
        opacity: 0,
        x: (i % 4 - 1.5) * 50,
        y: (Math.floor(i / 4) - 1.5) * 50,
        rotate: Math.random()*360,
        scale: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 20
        }
    })
}
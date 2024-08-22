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
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

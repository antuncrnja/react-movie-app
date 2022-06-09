import { motion } from "framer-motion"

const animations = {
    initial: {opacity: 0, y: 10},
    animate: {opacity: 1, y: 0},
    exit: {opacity: 0, y: -10}
}

export const TransitionPage = ({children}) => {
  return (
    <motion.div 
    variants={animations} 
    initial="initial" 
    animate="animate" 
    exit="exit"
    transition={{duration: .1}}
    >
    {children}
    </motion.div>
  )
}
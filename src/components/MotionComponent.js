import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionComponent = () => {
	return (
		
		
			<>
			<Link href="/MotionPage">
				<a>
			<motion.h1 layoutId="header">Component</motion.h1>
			
			<motion.img 
			layoutId="test" 
			whileHover={{scale: 1.05}} 
			animate={{scale: 1}}
			transition={{
				default: {duration: .2}, 
				ease: 'easeInOut'
			  }} 
			src="https://unsplash.it/400" 
			alt="" 
			style={{width: 200}}/>
			
			</a>
			</Link>
			</>
	
		
	  );
}
 
export default MotionComponent;
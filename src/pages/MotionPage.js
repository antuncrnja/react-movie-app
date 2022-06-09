import { motion } from 'framer-motion'

const MotionPage = () => {
	return (
		<div>
			<motion.h1 layoutId="header">This is Page</motion.h1>
			<motion.img layoutId="test" animate={{scale: 1}} src="https://unsplash.it/400" alt="" style={{width: 500, margin: '0 auto'}} transition={{
          default: {duration: .2}, 
          ease: 'easeInOut'
        }} />
			
			<motion.p initial={{opacity: 0, y: 50}} animate={{opacity: 1, y:0}} style={{width: 500, margin: '30px auto',}}transition={{
          default: {duration: .2, delay: .1}, 
          ease: 'easeInOut'
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsam corrupti, necessitatibus, unde dignissimos in nesciunt quasi consectetur praesentium aut nemo voluptate iste quo suscipit voluptas. Suscipit eveniet iure eius velit laborum illo saepe, nobis quis dolorum aspernatur! Odit cum vel aspernatur quia laboriosam adipisci repellendus quas rerum repudiandae libero!
			<br /><br />
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sint beatae magnam aut optio. Vel vitae blanditiis optio sit! Odio repudiandae minima, eveniet excepturi ipsum voluptas tempore, voluptate culpa voluptatem molestias modi nulla! Rem nesciunt velit eaque possimus dignissimos esse, corporis repellendus temporibus fugit placeat, est saepe? Explicabo a fugit sit sequi aut obcaecati dolorum, quos molestias vitae ullam maiores nemo illum eaque quas ipsam, quibusdam magnam. Recusandae eius, doloribus dolorem id animi necessitatibus eveniet non voluptates vel aspernatur vero quam at? Omnis, autem eaque fugiat fugit maiores facere ullam!
			</motion.p>

		</div>
			
	
	  );
}
 
export default MotionPage;
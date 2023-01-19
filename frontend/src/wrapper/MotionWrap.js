import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Component, className) => function LOP(){
  return (
    <motion.div
    whileInView={{y:[100, 50, 0], opcity: [0, 0, 1]}}
    transition={{duration:0.5}}
    className={`${className} app__flex`}
    >
      <Component/>
    </motion.div>
  )
}

export default MotionWrap

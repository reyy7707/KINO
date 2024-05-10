import React from 'react'
import image from '../../../assets/Group(1).svg'
import { motion } from 'framer-motion';

const Welcome = () => {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  return (
    <> <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: 'easeIn', duration: 1 }}
    >
      <div className='flex w-full items-center'>
        <img className='w-full h-auto' src={image} alt='icon' />
      </div>
    </motion.div>
    </>
  )
}

export default Welcome
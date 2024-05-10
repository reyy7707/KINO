import React from 'react'
import { Link } from 'react-router-dom'
import Area from '../../assets/Untitled.svg'
import { motion } from 'framer-motion'
import { useRef } from 'react'

const Header = () => {
    const ref = useRef(null)
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const variants = {
        hidden: {opacity: 0, x: -100},
        visible: i => ({
            opacity: 1,
            x: 0,
            transition: {delay: i * 0.1}
        })
    }

  return (
    <>
        <div className='flex w-full h-auto border items-center justify-center'>
            <div className='flex w-11/12 h-auto items-center justify-between'>
                <div className='flex w-5/12 h-auto items-center justify-between p-6'>
                    <img className='w-8 h-8' src='' alt='Logo'/>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={1} whileHover={{color: 'red'}}><Link to={'/films'}> <h1> Фильмы </h1> </Link></motion.div>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={2} whileHover={{color: 'red'}}><Link to={'/episodes'}> <h1> Сериалы </h1> </Link></motion.div>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={3} whileHover={{color: 'red'}}><Link to={'/multfilms'}> <h1> Мультфильмы </h1> </Link></motion.div>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={4} whileHover={{color: 'red'}}><Link to={'/'}> <h1> Рекомендации </h1> </Link></motion.div>
                </div>
                <div className='flex w-2/12 items-center justify-end'>
                    <Link to={'/Personal-Area'}>
                        <img src={Area} alt='personal-area'/>
                    </Link>
                </div>
            </div>
        </div>

        <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ease:'easeIn', duration: 1 }}
        >
           
        </motion.div>
    </>
  )
}

export default Header
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Area from '../../assets/Untitled.svg'
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
    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        if (window.scrollY > 0) {
            header.classList.remove('bg-black');
            header.classList.add('bg-black');
        } else {
            header.classList.remove('bg-black');
            header.classList.add('bg-black');
        }
    });

    const [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        if(localStorage.KINOauth) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    },[])

  return (
    <>
        <div id="header" className='flex w-full h-auto border-b-slate-500 border-b items-center justify-center fixed transition-colors duration-300 bg-black z-50'>
            <div className='flex w-9/12 h-auto items-center justify-between'>
                <div className='flex w-4/12 h-auto items-center justify-between p-6'>
                    <Link to={'/'}>
                        <h1 className='text-2xl text-white'> KINO </h1>
                    </Link>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={1} whileHover={{color: ''}}>
                        <Link to={'/'}> <h1 className='text-white font-mono text-lg'> Home </h1> </Link></motion.div>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={2} whileHover={{color: 'red'}}>
                        <Link to={'/catalog'}> <h1 className='text-white font-mono text-lg'> Catalog </h1> </Link></motion.div>
                    <motion.div variants={variants} animate={'visible'} initial={'hidden'} custom={3} whileHover={{color: 'red'}}>
                        <Link to={'/films'}> <h1 className='text-white font-mono text-lg'> Popular </h1> </Link></motion.div>
                </div>
                <div className='flex w-2/12 items-center justify-end'>
                    {isAuth ? 
                    <div className='flex'>
                        <Link to={'/personal-area'}>
                            <img className='w-16 h-16' src='https://cdn-icons-png.flaticon.com/128/4295/4295255.png' alt=''/>
                        </Link>
                    </div>
                    :
                     <div className='flex justify-around w-full'>
                        <Link to={'/personal-area'}>
                            <button className='text-white font-mono text-lg border border-gray-700 p-2 bg-gray-800 rounded-xl'> Log in </button>
                        </Link>
                        <Link to={'/register'}>
                            <button className='text-black text-mono text-lg border border-white p-2 bg-white rounded-xl'> Get started </button>
                        </Link>
                    </div>
                    }
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
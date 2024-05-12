//Компоненты

//Стили
import '../../index.css'
//Библиотеки
import React, { useState } from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [copyPassword, setCopyPassword] = useState('');
    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false)
    const [eye, setEye] = useState('invalid')

    const handlePassword = () => {
        setShowPass(!showPass);
        setEye('invalid')
      };
      const secondHandlePassword = () => {
        setShowPass(!showPass);
        setEye('valid')
      }

    const navigate = useNavigate()

    function register(e) {
        e.preventDefault()
        if(password !== copyPassword) {
            setError("Пароли не совпадают")
            return
        }
        createUserWithEmailAndPassword(auth, email, password, displayName).then((user) => {
            setDisplayName('')
            setError('')
            setEmail('');
            setPassword('');
            setCopyPassword('');
            localStorage.setItem('KINOauth', true )
            navigate('/personal-area')
        }) 
            .catch((error) => console.log(error))
    }
    console.log(displayName);
    return (
        <>
        <div className='w-full h-auto items-center justify-center flex'>
            <div className='w-2/6 h-auto flex flex-col mt-32 shadow-2xl border'>
                <form 
                    onSubmit={register}
                        className='flex flex-col items-center relative'>
                <div className='flex items-start flex-col'>
                    <h1 className='text-4xl text-clip pt-8 text-black opacity-90'> Регистрация аккаунта </h1>
                </div>
                    <h1 className='relative right-32 pt-8'> Введите свою почту* </h1>
                    <input 
                        value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                                placeholder='Введите почту' 
                                    type='email' 
                                        className='border rounded-md p-3 w-4/6 text-xl pl-8 mt-2'/> 
                    <h1 className='relative right-32 pt-8'> Придумайте пароль* </h1>
                    <div className='flex relative w-full items-center justify-center'>
                        <input 
                            value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                    placeholder='Введите пароль' 
                                        type={showPass ? 'text' : 'password'} 
                                            className='border rounded-md p-3 w-4/6 text-xl pl-8 mt-2'/>
                            <div className='flex'>
                                {eye === 'invalid' && <img className='w-6 h-6 absolute right-32 bottom-4 cursor-pointer' onClick={secondHandlePassword} alt='eyeHidden' src='https://cdn-icons-png.flaticon.com/128/2767/2767146.png' />}
                                {eye === 'valid' && <img className='w-6 h-6 absolute right-32 bottom-4 cursor-pointer' onClick={handlePassword} alt='eyeValid' src='https://cdn-icons-png.flaticon.com/128/709/709612.png' />}
                            </div>
                    </div>
                    
                    <h1 className='relative right-32 pt-8'> Повторите пароль* </h1>
                    <div className='flex relative w-full items-center justify-center'>
                        <input 
                            value={copyPassword}   
                                onChange={(e) => setCopyPassword(e.target.value)} 
                                    placeholder='Введите пароль повторно' 
                                        type={showPass ? 'text' : 'password'}
                                            className='border rounded-md p-3 w-4/6 text-xl pl-8 mt-2'/>
                            <div className='flex'>
                                {eye === 'invalid' && <img className='w-6 h-6 absolute right-32 bottom-4' onClick={secondHandlePassword} alt='eyeHidden' src='https://cdn-icons-png.flaticon.com/128/2767/2767146.png' />}
                                {eye === 'valid' && <img className='w-6 h-6 absolute right-32 bottom-4' onClick={handlePassword} alt='eyeValid' src='https://cdn-icons-png.flaticon.com/128/709/709612.png' />}
                            </div>
                    </div>
                        <div className='flex items-center relative right-32 pt-4'>
                            <input type='checkbox' className='w-5 h-5'/> <h1 className='pl-2'> Запомнить меня </h1>
                        </div>
                    <div className='flex w-full'>
                        <Link className='flex pl-28 pt-4 items-center' to={'/signIn'}> <h1> Уже есть аккаунт? </h1> <span className='text-blue-500 pl-1'> Войти </span> </Link>
                    </div>
                        <button 
                            className='bg-blue-500 rounded-md mt-8 p-4 w-4/6 text-white text-xl'> Зарегистрироваться </button>
                    {error ? <p className='text-red-500'> {error} </p> : ''}
                    <div className='flex pb-12'></div>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignUp

import React, { useState } from 'react'
import { auth } from '../firebase';
import '../../index.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

    function LogIn(e) {
        e.preventDefault()
       
        signInWithEmailAndPassword(auth, email, password).then((user) => {
            console.log(user);
            setError('')
            setEmail('');
            setPassword('');
            navigate('/personal-area')
        }) 
            .catch((error) => {
                setError('Мы не смогли найти ваш аккаунт');
                console.log(error);
            })
    }
    return (
        <>
            <div className='w-full h-auto items-center justify-center flex'>
                <div className='w-2/6 h-auto flex flex-col mt-32 shadow-2xl border'>
                   <form 
                    onSubmit={LogIn} 
                        className='flex flex-col items-center relative gap-4'>
                    <h1 className='text-4xl text-clip pt-8 text-black opacity-901'> Вход </h1>
                    <input 
                        value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                                placeholder='Введите почту' 
                                    type='email'
                                        className='border rounded-md p-3 w-4/6 text-xl pl-8 mt-2'/>
                    <div className='flex relative w-full items-center justify-center'>
                        <input 
                        value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                                placeholder='Введите пароль' 
                                    type={showPass ? 'text' : 'password'}
                                        className='border rounded-md p-3 w-4/6 text-xl pl-8 mt-2'/>
                        <div className='flex'>
                            {eye === 'invalid' && <img className='w-6 h-6 absolute right-32 bottom-3' onClick={secondHandlePassword} alt='eyeHidden' src='https://cdn-icons-png.flaticon.com/128/2767/2767146.png' />}
                            {eye === 'valid' && <img className='w-6 h-6 absolute right-32 bottom-3' onClick={handlePassword} alt='eyeValid' src='https://cdn-icons-png.flaticon.com/128/709/709612.png' />}
                        </div>
                    </div>
                    <div className='flex items-center relative right-32 pt-4'>
                            <input type='checkbox' className='w-5 h-5'/> <h1 className='pl-2'> Запомнить меня </h1>
                        </div>
                    <div className='flex w-full'>
                        <Link to={'/register'}> <h1 className='p-2 text-sm pl-28'> Еще нет аккаунта? <span className='text-blue-500'> Зарегистрируйтесь </span> </h1> </Link>
                    </div>
                    <button 
                        onClick={LogIn} 
                            className='bg-blue-500 rounded-md mt-2 p-4 w-4/6 text-white text-xl'> Войти </button>
                    {error ? <p className='text-red-500'> {error} </p> : ''}

                    <div className='flex pb-8'></div>
                </form> 
                </div>
            </div>
        </>
    )
}

export default SignIn

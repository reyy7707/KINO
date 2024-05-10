import { React, useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../firebase';
import Header from '../header/header';
import { Link } from 'react-router-dom';

const AuthDetails = () => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen()
        }
    }, []);

    function userSignOut() {
        signOut(auth)
            .then(() => console.log('Success'))
            .catch((e) => console.log(e))
    };
    return (
        <>
            <Header />
            <div className='flex fixed h-auto border justify-start items-center bg-black'>
                <div className='w-[10rem] flex bg-black flex-col items-center'>
                    <img className='w-40 h-30' src='https://cdn.dribbble.com/users/4051369/screenshots/17656333/media/7e1fc2d4e0cdfb64ec11ea30f0c4fd65.jpg?resize=400x0' alt='' />
                    <h1 className='text-white mt-10'> Profile </h1>
                    <h1 className='text-white mt-10'> Search </h1>
                    <h1 className='text-white mt-10'> Edit </h1>
                    <h1 className='text-white mt-10'> Movie </h1>
                    {authUser ? (
                        <div>
                            <div className='flex w-full items-center justify-center pt-6 pb-2'>
                                <button onClick={userSignOut} className='border-2 p-2 duration-500 text-white text-sm hover:border-red-500'> Выйти из аккаунта </button>
                            </div>
                        </div>
                    ) : <Link to={'/register'}> <h1 className='p-2 text-lg'> Еще нет аккаунта? <span className='text-lg text-blue-500'> Зарегистрируйтесь </span> </h1> </Link>
                    }
                </div>
            </div>

            <div className=''>
                <img src='https://kartinki.pics/uploads/posts/2021-07/1626844965_13-kartinkin-com-p-drakon-anime-khayao-miyadzaki-anime-krasiv-15.jpg' alt='' />
            </div>

            <div className='flex w-full items-center h-96'>
                <div className='flex w-2/6 border h-full flex-col ml-44'>
                    <div className='flex w-full justify-center'>
                        <img className='w-36 h-36' src='data:image/png;base64,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' alt='ava' />
                    </div>

                    <div className='flex pt-3 w-full items-center justify-center'>
                        <h1 className=''> Вы вошли как {authUser?.email} </h1>
                    </div>

                </div>

                <div className='flex w-2/6 border h-full flex-col'>
                    <h1 className='text-3xl p-3'> reyy reyy </h1>
                    <h2 className='text-lg pl-3'> Дата последнего входа в систему {authUser?.metadata.lastSignInTime} </h2>
                </div>
            </div>
        </>
    )
}

export default AuthDetails
import { Link } from "react-router-dom"

const ErrorBoundary = () => {
  return (
    <>
        <div className='flex w-full h-auto justify-center items-center'>
            <div className='flex items-center justify-center w-10/12 pt-22'>
                <div className='w-full h-auto flex-col flex gap-y-4 items-center'>
                    <img src='https://webartdevelopers.com/blog/wp-content/uploads/2018/09/404-SVG-Animated-Page-Concept.png' alt='error_boundary'/>
                    <p className='text-2xl'> Произошла ошибка </p>
                    <Link to={'/'}>
                      <button className="border w-[162px] h-[54px] bg-sky-500 text-white duration-300 hover:bg-sky-400"> На главную </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ErrorBoundary
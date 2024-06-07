// import image from '../../../assets/Group(1).svg'
// import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Welcome = () => {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  return (
    <> 
    {/* // <motion.div
    //   initial={{ opacity: 0, x: -100 }}
    //   animate={{ opacity: 1, x: 0 }}
    //   transition={{ ease: 'easeIn', duration: 1 }}
    // >
    //   <div className='flex w-full items-center'>
    //     <img className='w-full h-auto' src={image} alt='icon' />
    //   </div>
    // </motion.div> */}
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img className='w-full h-[941px]' src='https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1660776148_1-kartinkin-net-p-unesennie-prizrakami-oboi-na-rabochii-stol-1.jpg' alt='icon' />
          <div className='flex absolute top-96 right-64 flex-col'>
            <h1 className='text-white text-5xl font-mono p-1'> Spirited Away <span className='text-3xl'>6+</span> </h1>
            <h2 className='p-1 text-white font-mono text-3xl'> Little Chihiro and her mom and dad   </h2>
            <h2 className='p-1 text-white font-mono text-3xl'> are moving to a new house </h2>
            <div className='flex gap-6 pt-3'>
              <button className='rounded-lg font-mono px-5 py-3 bg-white'> Learn More </button>
              <button className='rounded-lg font-mono px-5 py-3 text-white bg-black'> Watch Trailer </button>
            </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img className='w-full h-[941px]' src='https://opis-cdn.tinkoffjournal.ru/mercury/in-out-anticipated-movies-2024.khjrv5alm6wp..jpg' alt='icon' />
        </SwiperSlide> */}
        <SwiperSlide>
        <div className='flex absolute top-96 right-72 flex-col'>
            <h1 className='text-red-500 text-5xl font-mono p-1'> Cruella <span className='text-3xl text-white'>12+</span> </h1>
            <h2 className='p-1 text-white font-mono text-3xl'> London in the 1970s is gripped  </h2>
            <h2 className='p-1 text-white font-mono text-3xl'> by an emerging punk rock culture </h2>
            <div className='flex gap-6 pt-3'>
              <button className='rounded-lg font-mono px-5 py-3 bg-white'> Learn More </button>
              <button className='rounded-lg font-mono px-5 py-3 text-white bg-black'> Watch Trailer </button>
            </div>
        </div>
          <img className='w-full h-[941px]' src='https://n1s1.hsmedia.ru/65/a0/67/65a0670c7d91142699e366a8744742ed/1600x960_0xac120003_7861189341623072249.jpg' alt='icon' />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Welcome
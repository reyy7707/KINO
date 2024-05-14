import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';


function Upcoming() {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDU2YTA2MWM1ZjllOTYwM2I4ZWIxYjQzMmRlNDU0ZSIsInN1YiI6IjY2MWU1ZDM5OTY2NzBlMDE3ZGQ5Mjk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i3exZvpRuW6sDsBDcMxtX17C88C5Ke-5RVbQAabwwGg';
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
          }
        };
        const url = 'https://api.themoviedb.org/3/movie/upcoming?language=ru-US&page=4';
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setTvShows(data.results);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>

      <div className='flex w-full justify-start bg-black'>
        <h1 className='text-2xl text-white pl-44 ml-2'><strong>Coming soon</strong></h1>
      </div>

    <div className='flex w-full justify-center items-center bg-black'>
        <div className='flex w-10/12'>
      <Swiper
        slidesPerView={5}
        pagination={{ clickable: true }}
      >
        {tvShows.slice(0, 10).map(tvShow => (
          <SwiperSlide key={tvShow.id}>
            <div className='h-auto w-4/6 rounded-lg flex-col mt-4 m-6 mb-12 relative inline-block group'>
                <Link to={`/films/${tvShow.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt='' className='block w-full h-auto transition duration-500 ease-in-out transformrounded-lg' />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
                </div>
                </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
    </>


  );
}

export default Upcoming

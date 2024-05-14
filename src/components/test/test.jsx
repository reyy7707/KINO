import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';


function Test() {
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
        const url = 'https://api.themoviedb.org/3/movie/popular?language=ru-US&page=1';
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Ошибка при загрузке данных');
        }
        const data = await response.json();
        setTvShows(data.results);
        console.log(data);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>

      <div className='flex w-full pt-12'>
        <h1 className='text-2xl pl-24'><strong>Популярно сейчас</strong></h1>
      </div>

      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {tvShows.slice(0, 9).map(tvShow => (
          <SwiperSlide key={tvShow.id}>
            <div className=' h-auto w-4/6 border flex-col mt-12 m-6 mb-12 relative inline-block group'>
              <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt='' className='block w-full h-auto transition duration-500 ease-in-out transform group-hover:blur-sm' />
              <div class="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
                <Link to={`/films/${tvShow.id}`}>
                  <p className="text-white text-4xl font-mono">Watch</p>
                </Link>
              </div>
              <div className='flex w-full items-center justify-center'><strong>{tvShow.name}</strong></div>
              <p className='p-4 overflow-hidden h-28'><strong>Описание:</strong> {tvShow.overview}</p>
              <p className='p-4 overflow-hidden'><strong>Рейтинг:</strong> {tvShow.vote_average}</p>
              <p className='p-4 overflow-hidden'><strong>Дата первого выхода:</strong> {tvShow.release_date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
        {tvShows.slice(10, 20).map(tvShow => (
          <SwiperSlide key={tvShow.id}>
            <div className=' h-auto w-4/6 border flex-col mt-12 m-6 mb-12 relative inline-block group'>
              <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt='' className='block w-full h-auto transition duration-500 ease-in-out transform group-hover:blur-sm' />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
                <Link to={`/films/${tvShow.id}`}>
                  <p className="text-white text-4xl font-mono">Watch</p>
                </Link>
              </div>
              <div className='flex w-full items-center justify-center'><strong>{tvShow.name}</strong></div>
              <p className='p-4 overflow-hidden h-28'><strong>Описание:</strong> {tvShow.overview}</p>
              <p className='p-4 overflow-hidden'><strong>Рейтинг:</strong> {tvShow.vote_average}</p>
              <p className='p-4 overflow-hidden'><strong>Дата первого выхода:</strong> {tvShow.release_date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>


  );
}

export default Test;

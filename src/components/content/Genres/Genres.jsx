import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Genres = () => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDU2YTA2MWM1ZjllOTYwM2I4ZWIxYjQzMmRlNDU0ZSIsInN1YiI6IjY2MWU1ZDM5OTY2NzBlMDE3ZGQ5Mjk3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.i3exZvpRuW6sDsBDcMxtX17C88C5Ke-5RVbQAabwwGg'
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${apiKey}`
                    }
                };
                const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setGenres(data.genres);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        };
        fetchData();
    },[])

  return (
    <>
         <div className='flex w-full pt-12'>
        <h1 className='text-2xl pl-24'><strong>Eposide Ganres</strong></h1>
    </div>
  <Swiper
  spaceBetween={20}
  slidesPerView={5}
  pagination={{ clickable: true }}
>
  {genres?.map(genre => (
    <SwiperSlide key={genre.id}>
      <div className='flex h-auto w-4/6 border flex-col mt-12 m-6 mb-12 items-center'>
        <h1 className='text-xl'> {genre.name} </h1>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </>
  )
}

export default Genres
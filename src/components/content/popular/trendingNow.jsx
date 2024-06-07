import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';


function TrendingNow() {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  const [tvShows, setTvShows] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
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
        setIsLoading(false)
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };

    fetchData();
  }, []);
  if(isLoading) {
    return(<> <div className='flex w-full items-center h-auto'>
            <div className='animate-spin bg-violet-500'>
                
            </div>
        </div> </>)
} else {
  console.log('');
} 

  return (
    <div id='trendingNow'>

      <div className='flex w-full justify-start bg-[#161515]'>
        <h1 className='text-2xl text-white relative left-64 ml-2 font-Nunito'><strong>Trending now</strong></h1>
      </div>

    <div className='flex w-full justify-center items-center bg-[#161515]'>
        <div className='flex w-9/12'>
      <Swiper
        slidesPerView={6.5}
        pagination={{ clickable: true }}
      >
        {tvShows.slice(0, 9).map(tvShow => (
          <SwiperSlide key={tvShow.id}>
            <div className='h-auto w-5/6 rounded-xl flex-col mt-4 m-6 mb-12 relative inline-block'>
              <Link to={`/films/${tvShow.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`} alt='' className='block w-full h-auto transition duration-500 ease-in-out transform rounded-lg' />
              <div className="absolute inset-0 flex items-center justify-center w-full h-full opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
              </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    </div>
    </div>


  );
}

export default TrendingNow

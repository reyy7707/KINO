import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import Header from '../../../widgets/header/header';

const Video = () => {
    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState([]);

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
        const url = 'https://api.themoviedb.org/3/movie/200/videos?language=en-US';
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Произошла ошибка при загрузке данных');
        }
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          setVideos(data.results);
          setName(data.results);
        }
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Header/>
        <div className="flex w-full items-center justify-center h-auto">
            <div className='flex w-11/12 border flex-wrap gap-8 justify-center h-auto p-4 mt-12'>
                {videos.map(video => (
                    <YouTube videoId={video.key} />
                ))}
                {name.map(names => {
                    <p> <strong> {names.name} </strong> </p>
                })}
            </div>
        </div>
    </>
    
  );
}

export default Video;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FilmDetails() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);

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
                const url = `https://api.themoviedb.org/3/movie/${id}?language=ru-US`;
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setFilm(data);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!film) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className='w-full h-auto flex justify-around'>
                <div className='w-auto h-auto flex flex-col shadow-2xl mt-28 mb-8'>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt='' className='w-auto h-auto rounded-t-lg' />                      
                </div>
            <div className='flex w-2/6 mt-28 ml-12 flex-col'>
                <p className='pt-1 text-3xl'>{film.title}</p>
                <p className='pt-2 text-3xl'> <strong> Рейтинг: </strong> {film.vote_average}</p>
                <div className='flex overflow-scroll w-3/6'>
                   <p className='pt-2 text-xl'> <strong className='text-3xl'>Описание: </strong>{film.overview}</p> 
                </div>
                <p className='pt-2 pb-2 text-3xl'> <strong>Дата первого выхода:</strong> {film.release_date}</p>
            </div>

            <div className='flex'>
                <img className='w-auto h-3/6 mt-24 rounded-lg' src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt='bg path' />
            </div>

            </div>
           
        </>

    );
}

export default FilmDetails;

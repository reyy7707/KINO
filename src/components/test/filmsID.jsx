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
    console.log(film);

    return (
        <>
            <div className='w-full flex h-auto'>
                <img className='w-auto ' src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt='bg path' />
            </div>

            <div className='w-full h-auto items-center justify-center flex'>
                <div className='w-[31rem] h-auto flex flex-col shadow-2xl mt-12 mb-8'>
                    <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt='' className='w-auto h-auto rounded-t-lg' />
                    <p className='pl-4 pt-1'> <strong>Название: </strong>{film.title}</p>
                    <p className='pl-4 pt-1'> <strong>Статус: </strong>{film.status}</p>
                    <p className='pl-4 pt-2'> <strong>Описание: </strong>{film.overview}</p>
                    <p className='pl-4 pt-2'> <strong>Рейтинг: </strong>{film.vote_average}</p>
                    <p className='pl-4 pt-2 pb-2'> <strong>Дата первого выхода:</strong> {film.release_date}</p>
                </div>

            </div>

        </>

    );
}

export default FilmDetails;

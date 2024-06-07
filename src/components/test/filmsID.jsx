import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FilmDetails() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [vote, setVote] = useState('')

    useEffect(() => {
        if (film?.vote_average > 0 && film.vote_average < 3) {
            setVote('red')
        } else if (film?.vote_average > 3 && film.vote_average < 6) {
            setVote('yellow')
        } else if (film?.vote_average > 6) {
            setVote('green')
        } else {
            setVote('0')
        }
    }, [film])

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
        return <div className='flex w-full items-center justify-center absolute top-44 animate-spin bg-blue-500'> </div>;
    }
    return (
        <div className='bg-[#161515]'>
            <div className='flex w-full h-[81px] items-center justify-center bg-black'></div>

            <div className='w-full h-auto flex justify-around'>
                    <div className='w-auto h-auto flex flex-col shadow-2xl mt-16 mb-16'>
                        <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt='' className='w-auto h-auto rounded-t-lg' />
                    </div>  
                <div className='flex w-2/6 mt-28 ml-12 flex-col'>
                    <p className='pt-1 text-3xl font-mono text-white'> <strong className='font-mono'>Название:</strong> {film.title}</p>
                    <div className='flex max-h-96 overflow-auto w-3/6'>
                        <p className='pt-2 text-xl font-mono text-white'> <strong className='text-3xl font-mono'>Описание: </strong>{film.overview}</p>
                    </div>
                    <p className='pt-2 text-3xl'>
                        <strong className='font-mono text-white'> Рейтинг: </strong>
                        {vote === 'green' && <span className='text-green-500'> ★★★★★★★ </span>}
                        {vote === 'yellow' && <span className='text-yellow-500'> ★★★★★ </span>}
                        {vote === 'red' && <span className='text-red-500'> ★★★ </span>}
                        {vote === '0' && <span className='text-white font-mono'> No ratings yet </span>}
                    </p>
                </div>
                <div className='flex w-2/6 h-full pt-28 flex-col'>
                    {film.poster_path && (
                        <div className='flex w-auto h-auto flex-col'>
                            <img className='w-full h-full' src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} alt='' />
                            <p className='pt-2 pb-2 text-3xl font-mono text-white'>
                                <strong>Дата первого выхода:</strong>{film.release_date}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FilmDetails;

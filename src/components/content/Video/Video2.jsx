import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Header from '../header/header';

function Video2() {
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
                const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
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
        {/* <Header/> */}
        
        <div className='w-full h-auto items-center justify-center flex'>
             <div className='w-[31rem] h-auto flex flex-col shadow-2xl mt-12 mb-8'>
                
            </div>       
            
        </div>

        </>
        
    );
}

export default Video2

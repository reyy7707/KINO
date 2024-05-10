import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../header/header';

const Episodes = () => {
    const { id } = useParams();
    const [episodes, setEpisodes] = useState([]);

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
                const url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`;
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setEpisodes(data.results);
                console.log(data.results);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
         <Header/>

        <div className='flex'>
            <div className='w-[31rem] h-auto flex flex-col shadow-2xl mt-12 mb-8'>
                {episodes.map((item, index) => (
                    <div className='flex w-full h-auto items-center flex-wrap' key={index}>
                        <div className='shadow-xl border'>
                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt='poster path'/>
                            <p> {item.name} </p>
                            <p> {item.overview} </p>
                            <p> {item.popularity} </p>  
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
       
    );
};

export default Episodes;

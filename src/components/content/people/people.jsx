import { useState, useEffect } from "react";

const People = () => {

    document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
    const [people, setPeople] = useState([]);

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
                const url = 'https://api.themoviedb.org/3/trending/person/week?language=en-US';
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Ошибка при загрузке данных');
                }
                const data = await response.json();
                setPeople(data.results);
            } catch (error) {
                console.error('Произошла ошибка:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="bg-black absolute top-0 w-full h-20"></div>
                <div className="flex w-full justify-center items-center pt-24">
                    <h1 className="text-3xl font-mono text-black"> Top most popular people this week </h1>
                </div>
            <div className="flex items-center justify-around w-full h-auto pt-8">
                <div className="flex flex-col border rounded-lg w-2/6 h-auto p-4">
                    {people.slice(0, 10).map((item, index) => (
                        <div className="flex items-center border shadow-xl p-2 m-2 relative" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
                            <p className="ml-4 font-mono">{item.name}</p>
                            <button className="border px-2 py-1 absolute bottom-4 right-4 font-mono"> Read More </button>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col border rounded-lg w-2/6 h-auto p-4">
                    {people.slice(10, 20).map((item, index) => (
                        <div className="flex items-center border shadow-xl p-2 m-2 relative" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
                            <p className="ml-4 font-mono">{item.name}</p>
                            <button className="border px-2 py-1 absolute bottom-4 right-4 font-mono"> Read More </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default People
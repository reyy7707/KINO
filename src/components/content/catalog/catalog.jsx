import React, { useState, useEffect, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import s from './catalog.module.css'

const icon = ()=>{
  return(<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 26 26" width="26px" height="26px"><path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"/></svg>)
}
const expand = ()=>{
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 15L12 9L6 15" stroke="white" stroke-opacity="0.24" stroke-width="2"/>
    </svg>
  )
}

const calendar = ()=>{
  return(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 1C8.05228 1 8.5 1.44772 8.5 2V3H15.5V2C15.5 1.44772 15.9477 1 16.5 1C17.0523 1 17.5 1.44772 17.5 2V3.02469C20.0267 3.27555 22 5.40733 22 8V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V8C2 5.40733 3.97334 3.27555 6.5 3.02469V2C6.5 1.44772 6.94772 1 7.5 1ZM4.17071 7H19.8293C19.4175 5.83481 18.3062 5 17 5H7C5.69378 5 4.58254 5.83481 4.17071 7ZM20 9H4V17C4 18.6569 5.34315 20 7 20H17C18.6569 20 20 18.6569 20 17V9Z" fill="white"/>
    </svg>
  )
}

const ToggleSection = ({ title, isOpen, onClick }) => {
  return (
    <div onClick={onClick} className='flex justify-between py-5 w-full items-center cursor-pointer border-b-2 border-b-white/10 mb-6 '>
      <span className='font-medium text-white'>{title}</span>
      <span><img className={`${isOpen ? 'rotate-180' : ''} w-5 h-5 duration-300`} src={expand} alt="" /></span>
    </div>
  );
};
ToggleSection.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.string,
  onClick: PropTypes.func,
}

const ToggleButton = ({ label, isActive, onClick }) => {
  return (
    <div onClick={onClick} className='duration-300 flex items-center gap-2 text-gray-500 cursor-pointer'>
      <div className={(isActive ? 'bg-white' : 'border-2') + ' duration-300 w-5 h-5 bg-def-black border-gray-500 flex justify-center items-center rounded-[4px]'}>
        <img src={icon} alt="" />
      </div>
      <span className={isActive && 'text-white font-medium'}>{label}</span>
    </div>
  );
};
ToggleButton.propTypes = {
  label: PropTypes.string,
  isActive: PropTypes.string,
  onClick: PropTypes.func,
}

function CatalogMenu() {

  const [year, setYear] = useState(false)
  const [genres, setGenres] = useState(true)
  const [formats, setFormats] = useState(true)
  const [status, setStatus] = useState(false)

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [action, setAction] = useState(false)
  const [adventure, setAdventure] = useState(false)
  const [school, setSchool] = useState(false)
  const [comedy, setComedy] = useState(false)
  const [drama, setDrama] = useState(false)
  const [fantasy, setFantasy] = useState(false)
  const [horror, setHorror] = useState(false)
  const [mahouShoujo, setMahouShouji] = useState(false)
  const [mecha, setMecha] = useState(false)
  const [music, setMusic] = useState(false)
  const [mystery, setMystery] = useState(false)
  const [psychological, setPsychological] = useState(false)
  const [romance, setRomance] = useState(false)
  const [sciFi, setSciFi] = useState(false)
  const [sliceOfLife, setSliceOfLife] = useState(false)
  const [sports, setSports] = useState(false)
  const [supernatural, setSupernatural] = useState(false)
  const [survival, setSurvival] = useState(false)

  const [tv, setTv] = useState(false)
  const [ova, setOva] = useState(false)
  const [ona, setOna] = useState(false)
  const [movie, setMovie] = useState(false)
  const [special, setSpecial] = useState(false)
  const [music1, setMusic1] = useState(false)

  const [airing, setAiring] = useState(false)
  const [complete, setComplete] = useState(false)
  const [upcoming, setUpcoming] = useState(false)

  const filters = useMemo(() => ({
    genres: [
      action ? '1' : '',
      adventure && '2',
      school && '23',
      comedy && '4',
      drama && '8',
      fantasy && '10',
      horror && '14',
      mahouShoujo && '66',
      mecha && '18',
      music && '19',
      mystery && '7',
      psychological && '40',
      romance && '22',
      sciFi && '24',
      sliceOfLife && '36',
      sports && '30',
      supernatural && '37',
      survival && '76',
    ]
      .filter(Boolean)
      .join(','),
    type: [
      tv ? 'tv' : '',
      ova && 'ova',
      ona && 'ona',
      movie && 'movie',
      special && 'special',
      music1 && 'music'
    ]
      .filter(Boolean)
      .join(','),
    status: [
      airing ? 'airing' : '',
      complete && 'complete',
      upcoming && 'upcoming'
    ]
      .filter(Boolean)
      .join(','),
    start_date: startDate,
    end_date: endDate,
  }), [startDate, endDate, action, adventure, school, comedy, drama, fantasy, horror, mahouShoujo, mecha, music, mystery, psychological, romance, sciFi, sliceOfLife, sports, supernatural, survival, tv, ova, ona, movie, special, music1, airing, complete, upcoming]);
  
  useEffect(() => {
    localStorage.setItem('filtersAnime', JSON.stringify(filters))
  }, [filters]);

  return (
    <>  
      <div className={s.sort}>
      <h1 className='text-3xl font-medium mb-8 text-white'>Catalog</h1>
      <div>
        <ToggleSection title="Year" isOpen={year} onClick={() => setYear(!year)} />
        <div className={`relative overflow-hidden duration-300 flex gap-3 items-start`} style={{ height: year ? 0 : '74px', visibility: year === 0 ? 'hidden' : 'visible'}}>
          <span className='h-[44px] flex items-center cursor-pointer'><img className='w-8' src={calendar} alt="" /></span>
          <input value={startDate} onChange={e => setStartDate(e.target.value)} className='outline-none border-2 focus:border-white/80 border-white/30 bg-def-black appearance-none w-[110px] px-3 py-2 rounded-xl' type="text" min="1960" max="2026" step="1" placeholder="2007-12-17"/>
        </div>

        <ToggleSection title="Genres" isOpen={genres} onClick={() => setGenres(!genres)} />
        <div className={`relative overflow-hidden duration-300 flex flex-col gap-3 items-start`} style={{ height: genres ? 0 : '666px', visibility: genres === 0 ? 'hidden' : 'visible'}}>
          <ToggleButton label="Action" isActive={action} onClick={() => setAction(!action)} />
          <ToggleButton label="Adventure" isActive={adventure} onClick={() => setAdventure(!adventure)} />
          <ToggleButton label="School" isActive={school} onClick={() => setSchool(!school)} />
          <ToggleButton label="Comedy" isActive={comedy} onClick={() => setComedy(!comedy)} />
          <ToggleButton label="Drama" isActive={drama} onClick={() => setDrama(!drama)} />
          <ToggleButton label="Fantasy" isActive={fantasy} onClick={() => setFantasy(!fantasy)} />
          <ToggleButton label="Horror" isActive={horror} onClick={() => setHorror(!horror)} />
          <ToggleButton label="MahouShoujo" isActive={mahouShoujo} onClick={() => setMahouShouji(!mahouShoujo)} />
          <ToggleButton label="Mecha" isActive={mecha} onClick={() => setMecha(!mecha)} />
          <ToggleButton label="Music" isActive={music} onClick={() => setMusic(!music)} />
          <ToggleButton label="Mystery" isActive={mystery} onClick={() => setMystery(!mystery)} />
          <ToggleButton label="Psychological" isActive={psychological} onClick={() => setPsychological(!psychological)} />
          <ToggleButton label="Romance" isActive={romance} onClick={() => setRomance(!romance)} />
          <ToggleButton label="SliceOfLife" isActive={sliceOfLife} onClick={() => setSliceOfLife(!sliceOfLife)} />
          <ToggleButton label="Sports" isActive={sports} onClick={() => setSports(!sports)} />
          <ToggleButton label="Supernatural" isActive={supernatural} onClick={() => setSupernatural(!supernatural)} />
          <ToggleButton label="Survival" isActive={survival} onClick={() => setSurvival(!survival)} />
          <ToggleButton label="SciFi" isActive={sciFi} onClick={() => setSciFi(!sciFi)} />
        </div>  

        <ToggleSection title="Formats" isOpen={formats} onClick={() => setFormats(!formats)} />
        <div className={`relative overflow-hidden duration-300 flex flex-col gap-3 items-start`} style={{ height: formats ? 0 : '230px', visibility: formats === 0 ? 'hidden' : 'visible'}}>
          <ToggleButton label="TV" isActive={tv} onClick={() => {setTv(!tv); setOva(false); setOna(false); setMovie(false); setSpecial(false); setMusic1(false)}} />
          <ToggleButton label="OVA" isActive={ova} onClick={() => {setOva(!ova); setTv(false); setOna(false); setMovie(false); setSpecial(false); setMusic1(false)}} />
          <ToggleButton label="ONA" isActive={ona} onClick={() => {setOna(!ona); setTv(false); setOva(false); setMovie(false); setSpecial(false); setMusic1(false)}} />
          <ToggleButton label="Movie" isActive={movie} onClick={() => {setMovie(!movie); setTv(false); setOva(false); setOna(false); setSpecial(false); setMusic1(false)}} />
          <ToggleButton label="Special" isActive={special} onClick={() => {setSpecial(!special); setTv(false);setOva(false); setOna(false); setMovie(false); setMusic1(false)}} />
          <ToggleButton label="Music" isActive={music1} onClick={() => {setMusic1(!music1); setTv(false); setOva(false); setOna; setMovie(false); setSpecial(false)}} />  
        </div>

        <ToggleSection title="Status" isOpen={status} onClick={() => setStatus(!status)} />
        <div className={`relative overflow-hidden duration-300 flex flex-col gap-3 items-start`} style={{ height: status ? 0 : '100px', visibility: status === 0 ? 'hidden' : 'visible'}}>
          <ToggleButton label="Airing" isActive={airing} onClick={() => {setAiring(!airing); setComplete(false); setUpcoming(false)}} /> 
          <ToggleButton label="Complete" isActive={complete} onClick={() => {setComplete(!complete); setAiring(false); setUpcoming(false)}} /> 
          <ToggleButton label="UpComing" isActive={upcoming} onClick={() => {setUpcoming(!upcoming); setAiring(false); setComplete(false)}} /> 
        </div>
      </div>
    </div>

    </>


  );
}

const SearchForm = ({ value, onChange }) => (
  <form className="flex justify-center gap-[2em]">
    <div className={s.inputBlock}>
      <input 
        value={value} 
        className="text-[#fafafa] font-medium text-[1.1em] w-full bg-white bg-opacity-20" 
        onChange={onChange} 
        placeholder="Search..." 
      />
    </div>
    <button type="submit" className={s.coolicon} >
      Submit
    </button>
  </form>
);
SearchForm.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onSubmit: PropTypes.func,
}

const ItemCard = ({ item }) => (
  <Link to={'/item/'+item.id}>
    <div className='relative py-28 h-[88.5%] rounded-xl overflow-hidden'>
      <div>
        <img src={item.backdrop_path} alt="" />
      </div>                      
      <div className='absolute bottom-0 right-0 h-60 flex items-end w-full bg-gradient-to-t from-black to-transparent opacity-80 p-4'>
        <div className='flex flex-col'>
          <p className='line-clamp-1 overflow-hidden text-[1.2em] text-white'>{item.title}</p>
          <p className='text-[#ababab] font-medium'>{item.release_date}</p>
        </div>
      </div>
    </div>
  </Link>
);
ItemCard.propTypes = {
  item: PropTypes.object,
}

const Catalog = ()=>{
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  const [tvShows, setTvShows] = useState([]);
  const [value, setValue]= useState('')

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

  return(
    <>
      <main className={s.main}>
        <CatalogMenu/>
        <div className={s.body}>
          <SearchForm value={value} onChange={e=>setValue(e.target.value)}/>
          <div className={s.carts}>
            {tvShows?.map((item, index) => <ItemCard item={item} key={index} />)}
          </div>
        </div>
        <p/>
        {/* <div className={s.character}>
          <Pagination current={page} onChange={handlePageChange} total={pages * 10} className={s.character__pagination}/>
        </div> */}
      </main>
    </>
  )
}
export default Catalog

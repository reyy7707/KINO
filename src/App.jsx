//Компоненты
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'
import TopRated from './components/content/popular/topRated'
import Upcoming from './components/content/popular/upcoming'
import Footer from './widgets/footer/footer'
// import Test from './components/test/test'
import Header from './widgets/header/header'
import Welcome from './components/content/Welcome/Welcome'
import TrendingNow from './components/content/popular/trendingNow'
import Popular from './components/content/popular/popular'
// import Genres from './components/content/Genres/Genres'
import Video from './components/content/Video/Video'
import FilmDetails from './components/test/filmsID'
// import GenresTV from './components/content/Genres/GenresTV'
import Episodes from './components/content/episodes/episodes'
// import Video2 from './components/content/Video/Video2'
//Стили
import './index.css'
//Библиотеки
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/content/catalog/catalog'



const App = () => {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  return (
    <>
    <Routes>
      <Route path='/' element={<> <Header/> <Welcome/> <TrendingNow/> <Popular/> <TopRated/> <Upcoming/> <Footer/> </>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/personal-area' element={<AuthDetails/>}/>
      <Route path="/films/:id" element={<><Header/> <FilmDetails/></>} />
      <Route path="/films" element={<><Header/></>} />
      <Route path='/video' element={<Video/>}/>
      <Route path='/episodes' element={<Episodes/>}/>
      <Route path='/now' element={<Popular/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      {/* <Route path='/videoTest' element={<Video2/>}/> */}
    </Routes> 
    </>
  )
}

export default App
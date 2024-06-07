//Компоненты
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import AuthDetails from './components/auth/AuthDetails'
import People from './components/content/people/people'
import Footer from './widgets/footer/footer'
import ErrorBoundary from './components/error/error_boundary'
import Header from './widgets/header/header'
import Popular from './components/content/popular/popular'
import Video from './components/content/Video/Video'
import FilmDetails from './components/test/filmsID'
import Episodes from './components/content/episodes/episodes'
//Стили
import './index.css'
//Библиотеки
import { Route, Routes } from 'react-router-dom'
import Catalog from './components/content/catalog/catalog'
import All from './components/content/popular/all'



const App = () => {
  document.cookie = 'cookieName=cookieValue; SameSite=None; Secure';
  return (
    <>
    <Routes>
      <Route path='/' element={<> <Header/> <All/> <Footer/> </>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/personal-area' element={<> <Header/> <AuthDetails/> <Footer/> </>}/>
      <Route path="/films/:id" element={<> <Header/> <FilmDetails/>  <Footer/> </>} />
      <Route path="/popular" element={<> <Header/> <People/> </>} />
      <Route path='/video' element={<Video/>}/>
      <Route path='/episodes' element={<Episodes/>}/>
      <Route path='/now' element={<Popular/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='*' element={<ErrorBoundary/>}/>
      {/* <Route path='/videoTest' element={<Video2/>}/> */}
    </Routes> 
    </>
  )
}

export default App
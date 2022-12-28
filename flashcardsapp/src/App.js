import './assets/styles/app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {Header, Footer} from './components/common';
import {
  Flashcards,
  Dictionary,
  Main,
  Error,
  Basic,
  Verbs,
  Food,
  Clothes,
  BasicGame,
  ClothesGame,
  VerbsGame,
  FoodGame,
  Login
} from './components/pages';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/users' element={<Login />} />
            <Route path='/basic' element={<Basic />} />
            <Route path='/verbs' element={<Verbs />} />
            <Route path='/food' element={<Food />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/game' element={<Flashcards />} />
            <Route path='/basic_game' element={<BasicGame />}/>
            <Route path='/clothes_game' element={<ClothesGame />} />
            <Route path='/verbs_game' element={<VerbsGame />} />
            <Route path='/food_game' element={<FoodGame />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route exact path='/' element={<Main />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
import './assets/styles/app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Flashcards from './components/pages/flashcards/Flashcard';
import Dictionary from './components/pages/dictionary/Dictionary';
import Main from './components/pages/main/Main';
import Error from './components/pages/error/Error';
import Basic from './components/pages/topics_words/basic/Basic';
import Verbs from './components/pages/topics_words/verbs/Verbs';
import Food from './components/pages/topics_words/food/Food';
import Clothes from './components/pages/topics_words/clothes/Clothes';
import BasicGame from './components/pages/flashcards/flashcards for topics/flashcardsBasic';
import ClothesGame from './components/pages/flashcards/flashcards for topics/flashcardsClothes';
import VerbsGame from './components/pages/flashcards/flashcards for topics/flashcardsVerbs';
import FoodGame from './components/pages/flashcards/flashcards for topics/flashcardsFood';
import Login from './components/pages/login/Login';

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
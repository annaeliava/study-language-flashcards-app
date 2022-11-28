import './assets/styles/app.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Main from './components/pages/main/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Flashcards from './components/pages/flashcards/Flashcard';
import Dictionary from './components/pages/dictionary/Dictionary';
import Error from './components/pages/error/Error';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/users' />
            <Route path='/game' element={<Flashcards />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route exact path='/' element={<Main />} />
            <Route path='*' element={<Error/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
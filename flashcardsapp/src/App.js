import './assets/styles/app.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Flashcards from './components/pages/flashcards/flashcard';

function App() {
  return (
    <div className='App'>
      <Header />
      <Flashcards />
      <Footer />
    </div>
  );
}

export default App;
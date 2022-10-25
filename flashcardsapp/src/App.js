import './assets/styles/app.scss';
import Header from './assets/components/common/header/Header';
import Footer from './assets/components/common/footer/Footer';
import Flashcards from './assets/components/pages/flashcards/flashcard.jsx';

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
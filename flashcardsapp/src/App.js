import './assets/styles/app.scss';
import Header from './assets/components/common/header/Header';
import Footer from './assets/components/common/footer/Footer';
import Dictionary from './assets/components/pages/dictionary/dictionary';

function App() {
  return (
    <div className='App'>
      <Header />
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
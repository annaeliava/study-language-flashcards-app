import './assets/styles/app.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Main from './components/pages/main/main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <main>
          <Routes>
            <Route path='/users' />
            <Route exact path='/' element={<Main />} />
            <Route>
              Error
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
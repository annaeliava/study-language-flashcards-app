import styles from './assets/styles/app.scss';
import Header from './assets/components/common/header/Header.jsx';
import Footer from './assets/components/common/footer/Footer.jsx';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
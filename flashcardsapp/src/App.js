import styles from './assets/styles/app.scss';
//import Header from './assets/components/common/header/Header';
//import Footer from './assets/components/common/footer/Footer';
import Dictionary from './assets/components/pages/dictionary/dictionary';

function App() {
  return (
    <div className={styles.App}>
      <Dictionary />
    </div>
  );
}

export default App;
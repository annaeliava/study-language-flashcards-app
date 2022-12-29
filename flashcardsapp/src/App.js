import './assets/styles/app.scss';
import React, {useState} from 'react';
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
import basic_data from './components/pages/topics_words/basic/basic-topic_data';

function App() {
  const [words, setWords] = useState(basic_data);

  const createOrUpdate = (newWord) => {
    const wordIndex = words.findIndex(word => word.id === newWord.id);
    let newWords;
    if(wordIndex !== -1) {
      newWords = [...words.slice(0, wordIndex), newWord, ...words.slice(wordIndex + 1)];
    } else {
      newWords = [...words, newWord];
    }
    setWords(newWords);
  };

  //deletes a word
  const deleteWord = (wordID) => {
    const filteredWords = words.filter(word => word.id !== wordID);
    setWords(filteredWords);
};
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
            <Route path='/game' element={<Flashcards words={words} />} />
            <Route path='/basic_game' element={<BasicGame />}/>
            <Route path='/clothes_game' element={<ClothesGame />} />
            <Route path='/verbs_game' element={<VerbsGame />} />
            <Route path='/food_game' element={<FoodGame />} />
            <Route path='/dictionary' element={<Dictionary words={words} createOrUpdate={createOrUpdate} deleteWord={deleteWord} />} />
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
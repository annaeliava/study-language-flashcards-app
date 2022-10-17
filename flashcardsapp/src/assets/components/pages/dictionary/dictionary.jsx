import React from 'react';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

function Dictionary() {
    return (
        <>
            <Header />
            <div className='title'>dictionary</div>
            <div className="container">
                <div className='tableNumberTitle'>№</div>
                <div className='tableWordTitle'>word</div>
                <div className='tableTranscriptionTitle'>transcription</div>
                <div className='tableTranslationTitle'>translation</div>
                <div className='tableNumber'>1</div>
                <div className='tableWord'>finger</div>
                <div className='tableTranscription'>[ˈfɪŋɡə]</div>
                <div className='tableTranslation'>палец</div>
                <button></button>
            </div>
            <Footer />
        </>
    );
}

export default Dictionary;
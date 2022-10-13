import React from 'react';

function Header() {
    return (
        <>
            <div className='container'>
                <div className='title'>IKNOWTHIS</div>
                <div className='currentLanguage'>EN</div>
                <img src='/flashcardsapp/src/assets/pics/header/header_home-icon.svg' alt='Home Icon' className='homeBtn' />
                <img src="/flashcardsapp/src/assets/pics/common/userpic.svg" alt="Userpic" className='myaccount' />
            </div>
            <hr></hr>
        </>
    );
}

export default Header;
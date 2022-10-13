import React from 'react';

function Header() {
    return (
        <>
            <div className='header-container'>
                <div className='header-title'>IKNOWTHIS</div>
                <div className='header-currentLanguage'>EN</div>
                <img src='/flashcardsapp/src/assets/pics/header/header_home-icon.svg' alt='Home Icon' className='header-homeBtn' />
                <img src="/flashcardsapp/src/assets/pics/common/userpic.svg" alt="Userpic" className='header-myaccount' />
            </div>
            <hr></hr>
        </>
    );
}

export default Header;
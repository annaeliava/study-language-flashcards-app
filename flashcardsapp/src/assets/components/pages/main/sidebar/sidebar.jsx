import React from 'react';

function Sidebar(props) {
    return (
        <>
            <div className='container'>
                <img src="{props.pic}" alt="sidebar" className='pic' />
                <div className='title'>{props.sidebar}</div>
            </div>
        </>
    );
}

export default Sidebar;
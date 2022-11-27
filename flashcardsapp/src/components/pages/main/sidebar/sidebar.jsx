import React from 'react';

function Sidebar(props) {
    const { data } = props;
    return (
        <>
            <div className='container'>
                <img src={data.pic} alt="sidebar" className='pic' />
                <div className='title'>{data.sidebar}</div>
            </div>
        </>
    );
}

export default Sidebar;
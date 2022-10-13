import React from 'react';

function Answer(props) {
    return (
        <>
            <button className='btn' style={{ backgroundColor: '#{props.bg}' }}>
                <img src='{props.icon}' />
            </button>
        </>
    );
}

export default Answer;
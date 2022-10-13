import React from 'react';

function Topic(props) {
    return (
        <>
            <div className='container'>
                <div className='topic'>{props.topic}</div>
                <div className='quantity'>{props.quantity} words</div>
            </div>
        </>
    );
}

export default Topic;
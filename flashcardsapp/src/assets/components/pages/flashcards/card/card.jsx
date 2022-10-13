import React from 'react';

function Card(props) {
    return (
        <>
            <div className='container'>
                <div className='card-body'>
                    <div className='topic'>{props.topic}</div>
                    <div className='word'>{props.word}</div>
                    <div className='transcription'>{props.transcription}</div>
                </div>
                <div className='numbers'>{props.numbers}</div>
            </div>
        </>
    );
}

export default Card;
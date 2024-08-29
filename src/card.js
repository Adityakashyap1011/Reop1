import React from 'react';
import "./Card.css"

function card(props){
    return(
        <div className='card'>
            <img src={props.img} className='size'></img>
            <h1>{props.heading}</h1>
            <p>{props.info}</p>
        </div>
    );
}

export default card;
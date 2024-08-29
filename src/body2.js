import React from 'react';
import "./Body2.css"
import arr from "./array"
import Card from "./card"

function createCard(element){
    return (
    <Card 
        key={element.key}
        img={element.image}
        heading={element.heading}
        info={element.info}
    />);
}

function body2(){
    return(
        <div className='page'>
            <h1>Benefits of Contribution</h1>
            <div className='benifits'>
                {arr.map(createCard)}
            </div>
        </div>
    );
}

export default body2;
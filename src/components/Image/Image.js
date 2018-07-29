import React from 'react';
import './Image.css';


const Image = props => (
    <div className="image-box" onClick={props.onClick}>
        <img className="image"src={props.image} alt={props.name} data-id={props.id}/>
    </div>
)


export default Image;
import React from 'react';
import '../components/Imageblock.css';

function Imageblock(props) {
    return (
        <div className="imageblock-container">
            <div className="imageblock-logo">
                {props.img}
            </div>
            <div className="imageblock-title">
               {props.title}
            </div>
            <div className="imageblock-description">
               {props.description}
            </div>
        </div>
    );
}

export default Imageblock;

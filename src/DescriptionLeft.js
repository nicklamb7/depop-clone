import React from 'react';
import './DescriptionLeft.css';

function DescriptionLeft({ title, text, button, image }) {
    return (
        <div className="description-left">
            <div className="left-column">
                <h2>
                    {title}
                </h2>
                <p>
                    {text}
                </p>
                <button>
                    {button}
                </button>
            </div>
            <div>
                <img className="" src={image} alt="" />
            </div>
        </div>
    )
}

export default DescriptionLeft

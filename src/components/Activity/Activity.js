import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {name, picture, rating, comment } = activity;
    return (
        <div className='activity-container'>
            <div className='img-name'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
            </div>
            <h3>{rating}</h3>
            <p>{comment}</p>
        </div>
    );
};

export default Activity;
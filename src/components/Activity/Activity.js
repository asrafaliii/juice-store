import React from 'react';
import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Activity = ({activity}) => {
    const {name, picture, rating, comment } = activity;
    return (
        <div className='activity-container'>
            <div className='img-name'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
            </div>
            <h4 className='text-danger mt-2'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>{rating}</h4>
            <p>{comment}</p>
        </div>
    );
};

export default Activity;
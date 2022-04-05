import React from 'react';
import useReviews from '../../hooks/useReviews';
import Activity from '../Activity/Activity';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();


    return (
        <div className='container'>
            <h3 className='mt-1 text-center' >Ratings and Reviews</h3>
            <div>
                {
                    reviews.map(activity => <Activity
                    key={activity.id}
                    activity={activity}
                    ></Activity>)
                }  
            </div>
            
        </div>
    );
};

export default Reviews;
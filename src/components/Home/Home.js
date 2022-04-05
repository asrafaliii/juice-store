import React from 'react';
import img from '../Image/banner.jpg';
import "./Home.css";
import useReviews from '../../hooks/useReviews';
// import Reviews from '../Reviews/Reviews';
// import { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews, setReviews] = useReviews();


    const navigate = useNavigate();
    const showAllReviews = () => {
        navigate ('/reviews');
    }

   



    return (
        <div className='container main-container'>
            <div className="banner-container">
                <div className='banner-tex'>
                    <h1 className='text-danger'>I don't drink alcohol</h1> 
                    <h3>so I relaxed with a couple of orange juices</h3>
                    <p>Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources</p>
                    <button type="button" className="btn btn-outline-danger">Learn More</button>
                </div>
                <div className='banner-img'>
                    <img src={img} alt=""></img>
                </div>
            </div>


            <div className='reviews-container'>
                <h2 className='mt-5' >Ratings and Reviews</h2>
                
                    {
                        reviews.slice(0,3).map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        ></Activity>)
                    }  
               
                <button onClick={showAllReviews} type="button" className="btn btn-outline-danger mt-3">See all reviews...</button>
            </div>
        </div>
        
    );
};

export default Home;
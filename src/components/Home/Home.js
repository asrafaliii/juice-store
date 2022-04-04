import React from 'react';
import img from '../Image/banner.jpg';
import "./Home.css";

const Home = () => {
    return (
        <div className="container banner-container">
            <div className='banner-tex'>
                <h1 className='text-danger'>I don't drink alcohol</h1> 
                <h3>so I relaxed with a couple of orange juices</h3>
                <p>Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources</p>
                <button type="button" class="btn btn-outline-danger">Learn More</button>
            </div>
            <div className='banner-img'>
                <img src={img} alt=""></img>

            </div>
        </div>
    );
};

export default Home;
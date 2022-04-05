import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Blogs</h2>
            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <h3>Semantic Elements in HTML</h3>
                <p>In HTML there are some semantic elements that can be used to define different parts of a web page: </p>
                <ul>
                    <li>article</li>
                    <li>aside</li>
                    <li>details</li>
                    <li>figcaption</li>
                    <li>figure</li>
                    <li>footer</li>
                    <li>header</li>
                    <li>main</li>
                    <li>mark</li>
                    <li>nav</li>
                    <li>section</li>
                    <li>summary</li>
                </ul>
            </div>
            <div className='shadow-sm p-3 mb-5 bg-body rounded'>
                <h3>Context API</h3>
                <h6>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h6>
                <p>In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
        </div>
    );
};

export default Blogs;
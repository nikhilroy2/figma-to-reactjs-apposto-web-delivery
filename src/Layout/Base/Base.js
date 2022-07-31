import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Base(props) {
    return (
        <div id='Base'>
            <Header></Header>
            {props.children}
            <Footer></Footer>
        </div>
    );
}

export default Base;
import React from 'react';
import './Section1.css'
function Section1(props) {
    return (
        <section id="Section1">
            <div className="vegemeat_box">
                <img src={require('./vegemeat.png')} alt="img" />
                <div className="info_box">
                    
                </div>
            </div>
            <div className="eggs_box">
                <img src={require('./eggs.png')} alt="img" />
            </div>

            <div className="orange_box">
                <img src={require('./orange.png')} alt="img" />
            </div>
        </section>
    );
}

export default Section1;
import React from 'react';
import './Pages.scss';

export default function About() {
    return (
        <section className="page-section">
            <div className="page-container">
                <h1>About City Tours</h1>
                <div className="page-content">
                    <div className="about-content">
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <p>Founded in 2024, City Tours has been helping travelers discover the world's most amazing cities. We believe that every city has a unique story to tell, and we're here to help you experience it.</p>
                            
                            <h2>Our Mission</h2>
                            <p>To provide unforgettable urban experiences that combine cultural immersion, historical insights, and modern city life.</p>
                            
                            <h2>Why Choose Us?</h2>
                            <ul>
                                <li><i className="fas fa-check"></i> Local Expert Guides</li>
                                <li><i className="fas fa-check"></i> Small Group Sizes</li>
                                <li><i className="fas fa-check"></i> Authentic Experiences</li>
                                <li><i className="fas fa-check"></i> Best Value for Money</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
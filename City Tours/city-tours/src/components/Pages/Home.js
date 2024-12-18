import React from 'react';
import './Pages.scss';

export default function Home() {
    return (
        <section className="page-section">
            <div className="page-container">
                <h1>Welcome to City Tours</h1>
                <div className="page-content">
                    <h2>Discover Amazing Cities</h2>
                    <p>Experience the world's most fascinating cities with our expertly guided tours. From the bridges of Chicago to the nightlife of Tokyo, we offer unforgettable urban adventures.</p>
                    <div className="features">
                        <div className="feature">
                            <i className="fas fa-map-marked-alt"></i>
                            <h3>Curated Routes</h3>
                            <p>Carefully planned itineraries to maximize your experience</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-users"></i>
                            <h3>Expert Guides</h3>
                            <p>Local experts who know their cities inside out</p>
                        </div>
                        <div className="feature">
                            <i className="fas fa-camera"></i>
                            <h3>Photo Spots</h3>
                            <p>Visit the most Instagram-worthy locations</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 
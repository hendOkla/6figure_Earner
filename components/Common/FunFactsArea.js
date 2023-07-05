import React from 'react';
import Link from 'next/link';

const FunFactsArea = () => {
    return (
        <>
            <div className="funfacts-area ptb-80">
                <div className="container">
                    <div className="contact-cta-box">
                        <h3>Have any question about us?</h3>
                        <p>Don't hesitate to contact us</p>

                        <Link href="/contact" className="btn btn-primary">
                            Contact Us
                        </Link>
                    </div>
                    <div className="map-bg">
                        <img src="/images/map.png" alt="map" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFactsArea;
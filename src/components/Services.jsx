import React from 'react';

function Services({ headline, subline, servicesData }) {
    return (
        <div className="Service-section">
            <div className="container">
                <div className="service-inner-content">
                    <h2 className="service-headline">{headline}</h2>
                    <p className="service-subline">{subline}</p>
                </div>    

                <div className="service-card">
                    <div className="container">
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="card-container">
                                        <img className="service-img" src={service.image} alt={service.title} />
                                        <h3 className="service-type-name">{service.title}</h3>
                                        <p className="service-description">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;

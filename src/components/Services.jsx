import React, { useEffect, useState } from 'react';

function Services() {
    const [servicesData, setServicesData] = useState([]);
    const [headline, setHeadline] = useState('');
    const [subline, setSubline] = useState('');

    useEffect(() => {
        fetch('https://api.buttercms.com/v2/pages/*/home/?auth_token=457d9757af00ac29e78fd4ae1c84187228fe3180')
            .then(response => response.json())
            .then(data => {
                const servicesSection = data.data.fields.services_section;
                setHeadline(servicesSection.headline);
                setSubline(servicesSection.subline);
                setServicesData(servicesSection.services);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='Service-section'>
            <div className="container">
                <div className="service-inner-content">
                    <h2 className='service-headline'>{headline}</h2>
                    <p className='service-subline'>{subline}</p>
                </div>    

                <div className="service-card">
                    <div className="container">
                        <div className="row">
                            {servicesData.map((service, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="card-container">
                                        <img className='service-img' src={service.image} alt={service.title} />
                                        <h3 className='service-type-name'>{service.title}</h3>
                                        <p className='service-description'>{service.description}</p>
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

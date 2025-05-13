import React from 'react'

export default function Services() {
    return (
        <div className="section" id="services">
            <h3 className="primary">Premium Grooming</h3>
            <h1 className="text" id="service-head">Our Barber Services</h1>
            <p className="desc">Professional barbering services to keep you looking sharp for everyday confidence or special occasions.</p>

            <div className="card-con">
                <div className="card">
                    <h1 className="text" id="card-head">Haircuts</h1>
                    <p className="text" id="card-des">Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.</p>
                    <ul className="list">
                        <li className="item">Classic Cuts</li>
                        <li className="item">Modern Styles</li>
                    </ul>
                </div>
                <div className="card">
                    <h1 className="text" id="card-head">Beard Services</h1>
                    <p className="text" id="card-des">Maintain your facial hair with our premium beard services. Our barbers specialize in perfect beard shaping, precise trims, and luxurious hot towel shaves for the ultimate grooming experience.</p>
                    <ul className="list">
                        <li className="item">Beard Trims</li>
                        <li className="item">Beard Shaping</li>
                    </ul>
                </div>
                <div className="card">
                    <h1 className="text" id="card-head">Premium Services</h1>
                    <p className="text" id="card-des">Enhance your look with our premium barbering services including expert hair coloring, revitalizing scalp treatments, and styling for special occasions when you need to look your absolute best.</p>
                    <ul className="list">
                        <li className="item">Hair Coloring </li>
                        <li className="item">Scalp Treatments</li>
                    </ul>
                </div>

            </div>
        </div>



    )
}

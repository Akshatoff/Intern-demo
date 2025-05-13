import { CallOutline } from 'react-ionicons'

export default function Home() {
    return (
        <div className="section" id="home">
            <img src="/hero.webp" alt="hero image" className="hero" />
            <h3 className="sub primary">Premium Barber Services in Denton</h3>
            <h1 className="text" id="heading">Classic Cuts, Modern Style<br></br>
                <span className="primary">Premium Barber Shop</span>
            </h1>
            <p className='desc'>At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.</p>
            <div className="btn-container">
                <button className="btn" id="service"><CallOutline
                    color={'#f4bf37'}
                    height="25px"
                    width="25px"
                />Our Services</button>
                <button className="btn" id="book"><CallOutline
                    color={'#f4bf37'}
                    height="25px"
                    width="25px"
                />Book Now</button>
            </div>

        </div>




    )
}

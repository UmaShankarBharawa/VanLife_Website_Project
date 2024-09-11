import { Link } from 'react-router-dom'
import BannerImg from '../assets/banner.png'

export default function About() {
  return (
    <div className="about-container">
        <img src={BannerImg} alt="banner" className='about--banner' />
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        <div>
            <h3>Your destination is waiting.
            Your van is ready.</h3>
            <Link className="exploreVansBtn">Explore our vans</Link>
        </div>
    </div>
  )
}

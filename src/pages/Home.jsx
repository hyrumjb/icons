import '../App.css';
import { NavLink } from 'react-router-dom'

import dwayneImg from "../assets/dwayne.png";
import barackImg from "../assets/barack.jpg";
import girlImg from "../assets/girl.png";

function Home() {
    return (
        <>
            <h2>Welcome to Icons</h2>
            <p>Let's get to know the legends . . .</p>
            <img src={barackImg} alt="Barack Obama" className="main-image" />
            <p>Heroes, giants, titans . . .</p>
            <img src={girlImg} alt="Spanx founder" className="main-image" />
            <p>Luminaries, pioneers, greats . . .</p>
            <img src={dwayneImg} alt="Dwayne Johnson" className="main-image" />
            <p>Trailblazers, masters, hall-of-famers . . .</p>
            <NavLink to="/creators">Learn more about the world's greatest creators.</NavLink>
            <NavLink to="/athletes">Discover the secrets behind some of the world's greatest athletes.</NavLink>
        </>
    );
}

export default Home;
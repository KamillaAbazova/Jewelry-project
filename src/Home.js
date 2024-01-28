import { Link } from "react-router-dom";
import insta from './insta.png';
import whatsapp from './whatsapp.png';
import email from './email.png';
import './App.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function Home() {

    const cont = useRef();
    
    useGSAP(() => {
        gsap.from(".slogan", {scale: 0, duration: 5, opacity: 0, delay: 4});
        gsap.from(".shipping", {scale: 0, duration: 3, opacity: 0, delay: 4});
        gsap.from(".btn-shop", {scale: 0, duration: 3, opacity: 0, delay: 6});
        gsap.from(".media", {scale: 0, duration: 3, opacity: 0, delay: 7});
      })

    return(
        <div className="home-cont">
        <div ref={cont} className ="home">
            <div className="heading">
            <h2 className="slogan">"Perfect by nature"</h2>
            <p className="shipping">Free shipping all over Europe</p>
            <Link to = "http://localhost:3000/shop">
            <button className="btn-shop">SHOP</button></Link>
            </div>
        </div>
            <div ref={cont} className="footer">
                <Link className="media" to = "https://wa.me/32466285478"><img src={whatsapp} alt="whatsapp"/></Link>
                <Link className="media" to = "mailto:alimilla171@gmail.com"><img src={email} alt="email"/></Link>
                <Link className="media" to = "https://www.instagram.com/madame_xl_boutique/"><img src={insta} alt="instagram"/></Link>   
            </div>
            </div>
        
    )
}
export default Home;
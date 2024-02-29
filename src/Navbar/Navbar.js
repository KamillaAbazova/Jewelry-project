import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import './style.css';

export const Navbar = () => {
    useGSAP(() => {
        gsap.from(".link", {y: -30, duration: 5, opacity: 0, delay: 3});
      })

    return (
    <nav>
      <Link className="link" to = "/Jewelry-project">Home</Link>
      <Link className="link" to = "/about">About</Link>
      <Link className="link" to = "/shop">Shop</Link>
      <Link className="link" to = "/contact">Contact</Link>
      <Link className="link" to = "/cart">Cart</Link>
    </nav>
    )
}
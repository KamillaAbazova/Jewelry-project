import { useState } from "react";
import { dataAbout } from "../dataAbout";
import './style.css';

function About() {
    const [fact, setFact] = useState(0);
    const {id, name, description, image} = dataAbout[fact];

    const previousFact = () => {
        setFact((fact => {
            fact--;
            if(fact < 0) {
                return dataAbout.length - 1;
            }
            return fact;
        }))
    }
    const nextFact = () => {
        setFact((fact => {
            fact++;
            if (fact > dataAbout.length - 1) {
                fact = 0;
            }
            return fact;
        }))

    }

    return(
        <div className="about-cont">
            <div>
                <h2 className="about-header">5 key facts about us</h2>
            </div>
            <div>
                <h3 className="description">{id} - {name}</h3>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div>
                <img className="picture" src={image} width="700px"alt="fact"/>
            </div>
            <div>
                <button className="next" onClick={previousFact}>PREVIOUS</button>
                <button className="next" onClick={nextFact}>NEXT</button>
            </div>
        </div>

    )
}
export default About;
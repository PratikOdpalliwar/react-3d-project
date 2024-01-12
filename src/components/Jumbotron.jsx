import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg"
import HoldingIphone from "../assets/images/iphone-hand.png"


const Jumbotron = () => {

const handleLearnmore = () => {
    const element = document.querySelector(".sound-section");
    window.scrollTo({
        top: element ? element.getBoundingClientRect().top : 0,
        left: 0,
        behavior: "smooth"
    });
  };
  

  return (
    <div className="jumbotron-section wrapper">
        <h2 className="title">
New
        </h2>
        <img src={Iphone} alt="" className="logo" />
        <p className="text">Big and Bigger.</p>
        <span className="description">
            From $41.62/mo. for 24 mo. or %999 before trad-in
        </span>
        <ul className="links">
            <li>
            <button className="button">
                Buy
            </button>
            </li>
            <li>
                <a className="link" onClick={handleLearnmore}>Learn more</a>
            </li>
        </ul>
        <img src={HoldingIphone} alt="Iphone" className="iphone-img" />    
        </div>
  )
}

export default Jumbotron

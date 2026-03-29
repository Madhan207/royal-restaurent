import React from "react";
import hero from '../assets/hero-bg.jpg'
import des from '../assets/o1.jpg'
import'../App.css'
import Menu from "./Menu";
function Home(){
    return(
        <div>
            <div className="bg">
                <img src={hero} alt=""  height="600px" width="100%" />
                <div className="hcon">
                    <h1>Fast Food Restaurant</h1>
                    <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                    <button>Order now</button>
                </div>
                <div className="hbox">
                <div className="hcard">
                    <div className="hi">
                    <img src={des} alt=""  height="165px"/>
                    </div>
                    <div className="htext">
                     <h4>Tasty Thursdays</h4>
                    <h2>20% Off</h2>
                    <button>Order Now!</button>
                    </div>
                </div>
                <div className="hcard">
                    <div className="hi">
                    <img src={des} alt=""  height="165px"/>
                    </div>
                    <div className="htext">
                     <h4>Tasty Thursdays</h4>
                    <h2>20% Off</h2>
                    <button>Order Now!</button>
                    </div>
                </div>
                </div>
            
            </div>
            <Menu/>
        </div>

    );
}

export default Home;
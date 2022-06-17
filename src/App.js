import React from "react";
import './App.css';
import deliverybag from './images/deliverybag.jpg';
import locationicon from './images/locationicon.png';
import card1 from './images/card1.svg';
import card2 from './images/card2.svg';
import card3 from './images/card3.svg';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div>
          <Router>
            <Navbar/>
          </Router>
        </div>
        <div className="middle1">
          <div className="order">
            <h1>Order food to your door</h1>
          </div>
          <div className="orderoption">
            <div className="devnpick">
              <div>
                <img src={deliverybag} className="deliverybag" alt=""></img>
              </div>
              <div className="dnpdrop">
                <p className="Dtext">Delivery</p>
              </div>
            </div>
            <div className="orderlocation">
              <div className="locationicon">
                <img src={locationicon} className="locationic"></img>
              </div>
              <div className="enterloc">
                <input className="enterlocation" type="text" placeholder="Enter delivery address"/>
              </div>
            </div>
            <div className="findorder">
              <button className="forder">Find Order</button>
            </div>
          </div>
          <div>
            <p><a href="#" className="signinrd">Sign in</a>for your recent address</p>
          </div>
        </div>
      </div>
      <div className="middle2">
        <div className="card1">
          <img src={card1}></img>
          <p className="carddetails">Feed your employees</p>
          <a className="cardlink" href="#">Create a business account</a>
        </div>
        <div className="card2">
          <img src={card2}></img>
          <p className="carddetails">Your restaurant, delivered</p>
          <a className="cardlink" href="#">Add your restaurant</a>
        </div>
        <div className="card3">
          <img  src={card3}></img>
          <p className="carddetails">Deliver with Uber Eats</p>
          <a className="cardlink" href="#">Sign up to deliver</a>
        </div>
      </div>
      <div className="mainmap">
        <div className="maplinks">
          <div className="map-head">
            <p>Cities near me</p>
          </div>
          <div className="link-head">
            <a>View all 500+ cities</a>
          </div>
        </div>
        <div>
          <iframe className="mainview" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18804796.405748896!2d-107.49978811816163!3d36.118268138689935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sin!4v1649785010304!5m2!1sen!2sin"></iframe>
        </div>
      </div>
      <div className="cityname">
        <div className="subcityname">
          <a className="citylink" href="#">Atlanta</a><br></br>
          <a className="citylink" href="#">Austin</a><br></br>
          <a className="citylink" href="#">Baltimore-Maryland</a><br></br>
          <a className="citylink" href="#">Boston</a><br></br>
          <a className="citylink" href="#">Charlotte</a><br></br>
          <a className="citylink" href="#">Chicago</a><br></br>
        </div>
        <div className="subcityname">
          <a className="citylink" href="#">Dallas-Fort Worth</a><br></br>
          <a className="citylink" href="#">Denver</a><br></br>
          <a className="citylink" href="#">Las Vegas</a><br></br>
          <a className="citylink" href="#">Los Angeles</a><br></br>
          <a className="citylink" href="#">Miami</a><br></br>
          <a className="citylink" href="#">Minneapolis - St. Paul</a><br></br>
        </div>
        <div className="subcityname">
          <a className="citylink" href="#">New York City</a><br></br>
          <a className="citylink" href="#">Palm Springs</a><br></br>
          <a className="citylink" href="#">Philadelphia</a><br></br>
          <a className="citylink" href="#">Phoenix</a><br></br>
          <a className="citylink" href="#">Pittsburgh</a><br></br>
          <a className="citylink" href="#">Portland</a><br></br>
        </div>
        <div className="subcityname">
          <a className="citylink" href="#">Sacramento</a><br></br>
          <a className="citylink" href="#">San Diego</a><br></br>
          <a className="citylink" href="#">San Francisco Bay Area</a><br></br>
          <a className="citylink" href="#">Seattle</a><br></br>
          <a className="citylink" href="#">Tampa Bay</a><br></br>
          <a className="citylink" href="#">Washington D.C.</a><br></br>
        </div>
      </div>

      <div>
        <div className="CwithU">
          <h1 className="country">Countries with Uber Eats</h1>
        </div>
        <div className="cityname">
          <div className="subcityname">
            <a className="citylink" href="#">United States</a><br></br>
            <a className="citylink" href="#">Spain</a><br></br>
            <a className="citylink" href="#">Brazil</a><br></br>
            <a className="citylink" href="#">Mexico</a><br></br>
            <a className="citylink" href="#">France</a><br></br>
            <a className="citylink" href="#">Japan</a><br></br>
          </div>
          <div className="subcityname">
            <a className="citylink" href="#">Canada</a><br></br>
            <a className="citylink" href="#">Australia</a><br></br>
            <a className="citylink" href="#">Poland</a><br></br>
            <a className="citylink" href="#">United Kingdom</a><br></br>
            <a className="citylink" href="#">Italy</a><br></br>
            <a className="citylink" href="#">Portugal</a><br></br>
          </div>
          <div className="subcityname">
            <a className="citylink" href="*">Switzerland</a><br></br>
            <a className="citylink" href="#">Chile</a><br></br>
            <a className="citylink" href="#">New Zealand</a><br></br>
            <a className="citylink" href="#">Taiwan (ROC)</a><br></br>
            <a className="citylink" href="#">South Africa</a><br></br>
            <a className="citylink" href="#">Belgium</a><br></br>
          </div>
          <div className="subcityname">
            <a className="citylink" href="#">Ecuador</a><br></br>
            <a className="citylink" href="#">Ireland</a><br></br>
            <a className="citylink" href="#">Sri Lanka</a><br></br>
            <a className="citylink" href="#">Sweden</a><br></br>
            <a className="citylink" href="#">Guatemala</a><br></br>
            <a className="citylink" href="#">Costa Rica</a><br></br>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="insidefooter">
          <div className="upperfooter">
            <div className="logondstore">
              <div>
                <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/69483074d137cc14cf3b62a50c0b2da3.svg" ></img>
              </div>
              <div className="storelink">
                <div>
                  <a href="#"><img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/3f9ab08ae56699b0acdd1f3adb635d19.svg"></img></a>
                </div>
                <div>
                  <a href="#"><img className="playstore" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/de177aac4e55e6af701b71ea0dcd0d97.png"></img></a>
                </div>
              </div>
            </div>
            <div className="cityname2">
              <div className="subcityname2">
                <a className="citylink2" href="#">Get Help</a><br></br>
                <a className="citylink2" href="#">Buy gift cards</a><br></br>
                <a className="citylink2" href="#">Add your restaurant</a><br></br>
                <a className="citylink2" href="#">Sign up to deliver</a><br></br>
                <a className="citylink2" href="#">Create a business account</a><br></br>
                <a className="citylink2" href="#">Save on your first order</a><br></br>
              </div>
              <div className="subcityname2">
                <a className="citylink2" href="#">Restaurants near me</a><br></br>
                <a className="citylink2" href="#">View all cities</a><br></br>
                <a className="citylink2" href="#">View all countries</a><br></br>
                <a className="citylink2" href="#">Pickup near me</a><br></br>
                <a className="citylink2" href="#">About Uber Eats</a><br></br>
                <a className="citylink2" href="#">English</a><br></br>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="lowerfooter">
            <div className="socialmedia">
              <div>
                <a href="#"><img className="media" src={facebook}></img></a>
              </div>
              <div>
                <a href="#"><img className="media1" src={twitter}></img></a>
              </div>
              <div>
                <a href="#"><img className="media2" src={instagram}></img></a>
              </div>
            </div>
            <div className="services">
              <div className="services1">
                <p className="services2">Privacy Policy</p>
                <p className="services2">Terms</p>
                <p className="services2">Pricing</p>
              </div><br></br>
              <div>
                <p>This site is protected by reCAPTCHA and the Google<spain className="TndS">Privacy Policy</spain>and<spain className="TndS">Terms of Service</spain>apply.</p>
              </div>
            </div>
            <div className="ubertech">
              <p className="notsell">Do not sell my info (California)</p><br></br>
              <p>© 2022 Uber Technologies Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

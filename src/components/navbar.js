import React, {useState} from "react";
import '..//App.css';
import { Link } from "react-router-dom";
import { FaBars , FaApple }  from "react-icons/fa";
import { ImAndroid }  from "react-icons/im";

function Navbar(){

    const [sidebars, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebars);
    return(
        <div>
            <div className="navbar">
                <div className="humburger">
                    <Link to="#" className="items">
                        <FaBars onClick={showSidebar}/> 
                    </Link>           
                </div>
                <div className="brandname">
                    <img className="brandlogo" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg"></img>
                </div>
                <div className="signbtn">
                    <button className="signinbtn">Sign in</button>
                </div>
            </div>
            <div className={sidebars ? 'mainsidebar active': 'mainsidebar'} onClick={showSidebar}>
                <nav className="sidebar">
                    <div className="sidebar-signbtn1">
                        <button className="sidebar-signbtn2">Sign in</button>
                    </div>
                    <div className="sidebar-items1">
                        <a href="#" className="sidebar-items">Create a business account</a><br></br>
                        <a href="#" className="sidebar-items">Add your restaurant</a><br></br>
                        <a href="#" className="sidebar-items">Sign up to deliver</a>
                    </div>
                    <div className="sidebar-items2">
                        <div>
                            <img className="sidebar-img1" src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/d524e619911872cb8ff783bcd7ab4290.svg"/>
                        </div>
                        <div>
                            <p className="sidebar-info">There's more to love in the app.</p>
                        </div>
                    </div>
                    <div className="sidebar-items3">
                        <div className="AndA">
                            <div><FaApple/></div>
                            <div><p className="AA">Apple</p></div>
                        </div>
                        <div className="AndA">
                            <div><ImAndroid/></div>
                            <div><p className="AA">Android</p></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
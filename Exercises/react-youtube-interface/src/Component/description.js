import React from "react";
import '../App.css'
import rct from '../assets/download.jpg'

class Description extends React.Component {
    render() {
        return <div className="lower">
        
        <div>
            <img className="profile" src = {rct}></img>
        </div>
        
        <button className="Sub">Subscribe 14K</button>
        
        <div>
            <p><b>React Conf</b></p>
            <p className="Graytext"> Published on Oct 26, 2018 </p>
            <p className="tinytext">The first three talks from React Conf 2018 by Sophie Alpert, Dan Abramov, and Ryan Florence.</p>
                <br></br>
            <p className="Linktext">Learn more about Hooks at</p>
            <a href='https://reactjs.org/hooks'>https://reactjs.org/hooks</a>
        </div>
        
        </div>
    }
}

export default Description;
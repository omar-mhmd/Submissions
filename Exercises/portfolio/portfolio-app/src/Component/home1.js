import React from 'react';
import '../App.css'
import About from './about2';

class Home extends React.Component{
    render() {
        return <div>

            <div className="Main-text">
        <h1>Portfolio</h1>
        </div>

                
        <div class="button">
            <button className="but1">
                    <a className="text"type="link" href="About2.html"><h2>About</h2></a>
                    
            </button>
            

            <button className="but2">
                    <a className="text"type="link" href="Work3.html"><h2>My Work</h2></a>
            </button>

            <button className="but3">
                    <a className="text"type="link" href="Contact4.html"><h2>Contact Me</h2></a>
            </button>
        </div>
    
        </div>
        
        
    }
}

export default Home;
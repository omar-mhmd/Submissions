import React from "react";
import '../App.css'

class Player extends React.Component {
    render() {
        return <div className="Player">
        
        <div className="MainPlayer">
            <iframe width="900" height="415" src="https://www.youtube.com/embed/dpw9EHDh2bM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div>
           <h1 className="Text1"><strong>React Today and Tomorrow and 90% Cleaner React With Hooks</strong></h1>
        </div>

        <div>
            <h2 className="Text2">320,374 views</h2> <hr className="line"></hr>
        
        </div>


        </div>
    }
}

export default Player;
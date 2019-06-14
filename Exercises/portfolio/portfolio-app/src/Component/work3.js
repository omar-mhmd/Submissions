import React from 'react';
import '../App.css'

class Work extends React.Component{
    render(){
        return <div>
         <div className="box">
            <h2>Work</h2>
        </div>
        
        <div className="work-text">
        <p><b>RandomText is a tool designers and developers can use to quickly grab dummy text in either Lorem Ipsum or Gibberish format.</b></p>
        
        <p>There are a number of features that make RandomText a little different from other Lorem Ipsum dummy text generators you may find around the web....</p> </div>
        
        <div>
        <button className="but4">
      <a className="text"type="link" href="main1.html"><h2>Go back to homepage</h2></a>
    </button>
    </div>

    <div>
    <button className="but5">
            <a className="text"type="link" href="Contact4.html"><h2>Go to Next Page</h2></a>
        </button>
        </div>


        </div>
    }
}

export default Work;

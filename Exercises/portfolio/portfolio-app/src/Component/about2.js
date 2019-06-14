import React from 'react';
import '../App.css';

class About extends React.Component{
    render() {
        return <div>
             <div> <p className="intro">
            Welcome dear reader,
            In this page, you will be introduced more about me and my work.
            You'll also be introduced to my history and fun facts.
            I hope you enjoy your time !
        </p>
    </div>

    <div className="History">
        <h1>History</h1>
    </div>
    <div className="par1">
        <p>I was always fascinated with PCs.
            Coming from a background of family who has no prior knowledge in PCs or had prior internet knowledge,
            I had to learn most of the stuff by myself.
            I never got Internet until I was probably a teenager and have learned everything myself, that I became known in my family as the tech wiz.
            At the age of 15, I joined Wikia Fandoms and became an admin, during that time I was introduced to CSS and what hacking the code meant.
            I also learned what HTML meant and became familiar with most of the basics.
            My passion during that time was designing as I really did enjoy making aesthetically pleasing css templates.
        </p>
    </div>
    <div className="Fun-Facts">
        <h2>Fun Facts</h2>
    </div>

    <div className="list">
           <li>I have knowledge in Graphic Design</li>
           <li>I am a beginner digital artist</li>
           <li>I love doing CSS</li>
           <li>I am a staff on wiki fandoms and amino comunities</li>
           <li>I love asian fandoms such as kpop,anime,kdramas...</li>
           <li>I get motivated easily</li>
           <li>I get excited when working in groups</li>
           <li>I sometimes love being a leader</li>
           <li>I sometimes hate humanity</li>
           <li>GO GREEN !</li>
           <li>I support gender equality</li>
           <li>I defend against animal abuse</li>
           <li>DO NOT STEAL MY FOOD</li>
           <li>Don't cross me or else</li>
           <li>I'm a gemini so I will get you if you cross me</li>
    </div>
        <div>
    <button className="but4">
        <a className="text"type="link" href="main1.html"><h2>Go back to homepage</h2></a>
    </button>


    <button className="but5">
            <a className="text"type="link" href="Work3.html"><h2>Go to Next Page</h2></a>
        </button>
    
        </div>


            
        </div>
    }
}

export default About;
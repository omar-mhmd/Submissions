import React from 'react';
import '../App.css'

class Contact extends React.Component{
    render(){
        return <div>
             <div class="box">
         <h2>Contact Me</h2>
        </div>

        <div className="contact">
            <li>Github: omar-mhmd</li>
            <li>Facebook: Omar Mohammad</li>
            <li>Phone: +961 78871488</li>
            <li>Email: om246357@gmail.com</li>
        </div>

        <div className="form">
        <form>
        <label>Firstname</label>
        <input type="text" name="Firstname"></input>

        <label>Lastname </label><input type="text" name="Lastname"></input>
                    <br></br>
                    <br></br>
                    <br></br>
                    <label>Email </label>
                    <input type="email" name="email"></input>
                
                    <label>Message </label> <textarea name="Message"></textarea>
        </form>
        </div>

        </div>
    }
}

export default Contact;
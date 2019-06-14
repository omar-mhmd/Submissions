import React from 'react';
import './App.css';
import{BrowserRouter, Route } from "react-router-dom";
import Home from './Component/home1.js';
import About from './Component/about2';
import Work from './Component/work3';
import Contact from './Component/contact4';


class App extends React.Component {

    render() {
        return (
            // <div className="App">
            // <Home></Home>
            // <About></About>
            // </div>
            <BrowserRouter>
            <div>
            <Route path="/" component={Home} exact />
            <Route path="/main1.html" component={Home} />
            <Route path="/About2.html" component={About} />
            <Route path="/Work3.html" component={Work} />
            <Route path="/Contact4.html" component={Contact} />
            </div>
            </BrowserRouter>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Employee from './components/Employee'
import Flipkartdata from './components/Flipkartdata'
import Totallistdata from './components/Totallistdata'
import Content from './components/Content'


const routing = (
    <Router>
        <div className="routercss container">

         
            <Route exact path="/" component={App} />
            <Route path="/employee" component={Employee} />
            <Route path="/flipkartdata" component={Flipkartdata} />
            <Route path="/totallistdata" component={Totallistdata} />
            <Route path="/Content" component={Content} />
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

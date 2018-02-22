import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import Layout from 'components/Layout';

import Home from 'routes/Home';
import About from 'routes/About';
import News from 'routes/News';
import GlobalHashRate from 'routes/Charts/GlobalHashRate';
import HashingDistribution from 'routes/Charts/HashingDistribution';


class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/news' component={News}/>
                    <Route exact path='/charts/global-hashrate' component={GlobalHashRate}/>
                    <Route exact path='/charts/hashing-distribution' component={HashingDistribution}/>
                </Layout>
            </Router>
        );
    }
}

export default App;

import React, {Component} from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import './App.css';
import Home from 'routes/Home';
import Layout from 'components/Layout';


class App extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path='/' component={Home}/>
                </Layout>
            </Router>
        );
    }
}

export default App;

import React from 'react';
import { connect } from 'react-redux';
import { Router, Link } from 'react-router-dom';

class HomeComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h2>Hello World!</h2>
        );
    }
}

export function mapStateToProps(store){
    return {

    };
}

export default connect(mapStateToProps)(HomeComponent);
import React, { Component }     from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ReactDOM         from 'react-dom';
import {App}            from '../index';
// import '../styles/Strategycard.css';
import '../styles/index.css';

export class StrategyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    componentDidMount(){
    }

    render(){

        const {
            mapName,
            strategyName,
            strategySummary
        } = this.props

        return(
            <div className="strategyCardContainer">
                <h1>{mapName+ ' ' + strategyName}</h1>
                <h2>{strategySummary}</h2>
            </div>
        )
    }
}
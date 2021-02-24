import React from 'react';
import { useHistory } from 'react-router-dom';

import '../css/start.css';
import airbean from '../assets/graphics/airbean-landing.svg';
import introleft from '../assets/graphics/intro-graphic-left.svg';
import introright from '../assets/graphics/intro-graphic-right.svg';


export default function Start(){
const history = useHistory();

function clickHandler(){
    history.push('/menu');
}

    return (
        <div className="landing-page">
        <div className="img-content">
            <img src={introleft}></img>
            <div className="logo">
            <img src={airbean}></img>
            </div>
            <div className="img-right">
            <img src={introright} onClick={clickHandler} ></img>
            </div>
        </div>
        </div>

    )
}
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './TitleItem.css';

const titleItem = (props) => {
    return(
        <div className = "outerdiv" >
            <div className="enclosingdiv">
            <img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png"/>
            <div className="content">
                <p><strong>{props.header}</strong></p>
                <p> {props.description} </p>
                <p> {props.details} </p>
            </div>
            <div className="progressbar">
            <CircularProgressbar style = {{width: 50, height: 50}} value={props.progress} text={props.progress} />
            </div>
            </div>
        </div>
    );
}

export default titleItem;
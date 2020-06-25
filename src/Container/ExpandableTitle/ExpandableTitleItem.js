import React from 'react';


import './ExpandableTitleItem.css'

const expandableTitleItem = (props) => {
    return(
        <div className = "outer">
            <div className="enclosing">
            <img  className ="img" src="https://img.icons8.com/fluent/48/000000/menu--v2.png"/>
            <div className="contents">
                <p><strong>{props.header}</strong></p>
                <p> {props.description} </p>
                <p> {props.details} </p>
            </div>
            <button className = "btn" onClick = {props.delete}>delete</button>
            </div>
        </div>
    );
}

export default expandableTitleItem;
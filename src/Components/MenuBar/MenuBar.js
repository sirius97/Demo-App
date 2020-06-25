import React from 'react';
import {NavLink} from 'react-router-dom';
import { withRouter } from "react-router";



import "./MenuBar.css";

const menuBar = () => {
    return(
        <div className="sidenav">
            <h1>TEST APP</h1>
            <div style = {{display: 'flex', marginLeft: '25px'}}>
                <img src="https://img.icons8.com/windows/32/000000/home.png" alt='home'/>
                <NavLink to="/Demo-App/"  active>Home</NavLink>
            </div>
            <div style = {{display: 'flex', marginLeft: '25px'}}>
                <img src="https://img.icons8.com/windows/32/000000/compass.png" alt='menu1'/>
                <NavLink to="/menu2" >Menu 2</NavLink>
            </div>
            <div style = {{display: 'flex', marginLeft: '25px'}}>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/details.png" alt='menu2'/>
                <NavLink to="/Demo-App/" >Menu 3</NavLink>
            </div>
            <div style = {{display: 'flex', marginLeft: '25px'}}>
                <img src="https://img.icons8.com/windows/32/000000/chat.png" alt='menu3'/>
                <NavLink to="/menu2" >Menu 4</NavLink>
            </div>
        </div>
    );
};

export default withRouter(menuBar);
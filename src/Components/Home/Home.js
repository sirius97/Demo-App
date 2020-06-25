import React from 'react';


import Title1 from '../../Container/Title1/Title1';
import ExpandableTitle from '../../Container/ExpandableTitle/ExpandableTitle';
import './Home.css';

const home = () => {
    return(
        <div className = "styleDiv">
            <Title1 />
            <div className = "style">
            <ExpandableTitle title = "Title 2"/>
            <ExpandableTitle  title = "Title 3"/>
            </div>
        </div>
    );
}

export default home;
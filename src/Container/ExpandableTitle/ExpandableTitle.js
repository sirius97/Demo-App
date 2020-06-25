import React, {Component} from 'react';

import ExpandableTitleItem from './ExpandableTitleItem';
import './ExpandableTitle.css'

export class ExpandableTitle extends Component{
    state = {
        // Data in state can be populated from backend this is just a Dummy state for rendering logic
        data: {
            header: 'Some Header',
            description: 'Some description',
            details: 'Detailed description'
        },
        count : [0,1,2]
    }
    
    deleteHandler = (index) => {
        let updatedCount = [...this.state.count]
        updatedCount.splice(index,1)
        this.setState({
            count : updatedCount
        })
    }

    render(){
        let item = this.state.count.map((p,index) => {
            return (
                <li key = {p}>
                    <ExpandableTitleItem 
                    header = {this.state.data.header}
                    description = {this.state.data.description}
                    details = {this.state.data.details} 
                    delete = {() => this.deleteHandler(index)} />
                </li>
            )
        })

        const moreButtonHandler = () =>{
            let lastEle = this.state.count.slice(-1)[0] + 1
            if(!lastEle){
                lastEle = [1]
            }
            
            this.setState({
                count: this.state.count.concat(lastEle)
            })

        }
     

        return(
            <div>
                <h4 style = {{color: 'rgba(62, 184, 78, 0.856)', marginTop: '0px'}}> {this.props.title} </h4>
              <ul style = {{listStyle: 'none'}}>
                {item}
              </ul>
               <p className = "pStyle"
               onClick = {moreButtonHandler}>More ▼</p>
            </div>
        );
    }
}

export default ExpandableTitle;


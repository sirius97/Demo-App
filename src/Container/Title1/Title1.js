import React, { Component } from 'react';

import TitleItem from './TitleItem';

class Title extends Component{

    state = {
        data : [
        {
        header:'Some Header',
        description: 'Some description',
        details: 'Detailed description',
        progress: 60
    },
    {
        header:'Some Header',
        description: 'Some description',
        details: 'Detailed description',
        progress: 80
    },
    {
        header:'Some Header',
        description: 'Some description',
        details: 'Detailed description',
        progress: 60
    },
    {
        header:'Some Header',
        description: 'Some description',
        details: 'Detailed description',
        progress: 60
    },
    {
        header:'Some Header',
        description: 'Some description',
        details: 'Detailed description',
        progress: 60
    },
    ]  
    }

    render(){

      let items = this.state.data.map((p,index) => {
          return <li key = {index}>
              <TitleItem 
              header = {p.header} 
              description = {p.description} 
              details = {p.details}
              progress = {p.progress}/>
          </li>
      })
      

      
// <p style = {{float: 'left', marginLeft: '210px', marginBottom: '80px'}}>Title 1</p><br/>
        return(
            <div style = {{position: 'fixed'}}>
                <h4 style = {{color: 'rgba(62, 184, 78, 0.856)', marginTop: '0px'}}>Title 1</h4>
                <ul style = {{listStyle: 'none'}}>
                    {items}
                </ul>

            </div>
        )
    }
}

export default Title;
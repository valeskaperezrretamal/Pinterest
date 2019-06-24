import React, {Component} from 'react';
import { async } from 'q';
import Images from './Images';
import {accesKey,endPoint} from './Unplash';


class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            images:{
                author: '',
                fileName:'',
                id: '',
            }
        }
    }
    

   
    render(){
        return(
            <div>
                <body>
            <Images images={{...this.state.images}}/>
            </body>
            </div>
        );
    }
}


 //const result = await fetch ();
            //const data = await result.jason();
            //console.log(data);

export default Content;
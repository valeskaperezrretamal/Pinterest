import React, {Component} from 'react';
import { async } from 'q';
import Images from './Images';
import {accesKey,endPoint} from './Unplash';
import ReactDOM from 'react-dom';



class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            images:{
                author: '',
                description:'',
                id: '',
            }
        }
        
        
    }
    
   
   
    render(){
        const Attributes = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
      
        return(
            <div>

                <body>
                    <img src={Attributes}/>;
            
                </body>
                
            </div>
            
        );
       
    }
}


//<Images images={{...this.state.images}}/>
 //const result = await fetch ();
            //const data = await result.jason();
            //console.log(data);

export default Content;
import React,{Component} from 'react';


class Content extends Component {
    constructor(props){
        super(props);
        
    }

    images=()=>{
        return this.props.images.images.map(element => {
            return <img id="thumb" src={element.thumb} /> 
        })
    }
    render(){
        return(
            <div> 
                {this.images()}
            </div>
    
        );
    

    }
    
}

export default Content;



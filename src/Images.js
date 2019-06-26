import React from 'react';



const Images = (props) =>{
    
    return(
        <div>
            
        </div>
        
    );
}
componentDidMount =()=> {
    window.addEventListener('scroll', this.handleScroll);
}

componentWillUnmount=()=> {
    window.removeEventListener('scroll', this.handleScroll);
}

handleScroll =(event)=> {
    let scrollTop = event.element.thumb.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate
    });
}

export default Images;



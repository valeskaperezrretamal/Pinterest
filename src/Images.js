import React from 'react';
import Content from './Content';


const Images = (props) =>{
    
    return(
        <React.Fragment>
            <img key={props.Images.id}src={'https://api.unsplash.com/search/photos${props.Images.fileName}'} alt={props.fileName}/>
        </React.Fragment>

    );
}

export default Images;
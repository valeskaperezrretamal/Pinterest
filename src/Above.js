import React from 'react';
import pinterest from './img/pinterest.png'

const style = {
    img : {
        paddingBottom: '4px',
        paddingTop: '4px',
        paddingLeft: '4px',
        paddingRight: '4px',
        boxSizing: 'border-box',
        alignItems: 'center',
        position: 'absolute',
        width: '48px',
        height: '48px',
        
    },
    header : {
        backgroundColor: 'gray',
        color: 'gary',
        fontFamily: 'roboto',
        fontSize: '16px',
        height: '56px',
        width: '100%',
        position: 'relative',
        lineHeight: 'normal',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingBottom: '4px',
        paddingTop: '4px',
        boxSizing: 'border-box',
    },
    input : {
        minWidth: '407px',
        paddingLeft: '16px',
        paddingRight: '16px',
        width: '743px',
        height: '40px',
        backgroundColor: '',
        border: 'none',
        color: '#333',
        marginLeft: '76px',
        mozBorderRadius: '10px',
        webkitBorderRadius: '10px',
        borderRadius: '10px',
        border: '1px', 
        solid: '#000000',
        fontSize: '16px',
        fontWeight: '600',
        outline: 'none',
        padding: '0',
        
        },
        button : {
        fontSize: '16px',
        backgroundColor: 'grey',
        color: '#333',
        marginLeft: '76px',
        mozBorderRadius: '10px',
        webkitBorderRadius: '10px',
        borderRadius: '10px',
        border: '1px', 
        solid: '#000000',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingBottom: '8px',
        paddingTop: '8px',
        boxSizing: 'border-box',
        letterSpacing: '-.4px',
        fontSize: '16px',
        fontWeight: '600',
        outline: 'none',
        padding: '0',

        },
       
    


};



const Above = ()=> {
    return (
      
        <header style={style.header}>
            
          <div className="logo-pinterest">
          <img style={style.img}src={pinterest}  alt="logo" />
          </div>
          <div className="input">
          <input style={style.input} type="text" placeholder="Buscar"/>
          </div>
          <button style={style.button}>Inicio</button>
          <button style={style.button}>Siguiendo</button>
          <button style={style.button}>Valeska</button>
        </header>
      
    );
  }
  
  export default Above;
  
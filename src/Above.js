import React from 'react';
import pinterest from './img/pinterest.png'
import './styles/StyleAbove.css';


const Above = ()=> {
    return (
      
        <header>
            
          <div>
            <img src={pinterest}  alt="logo" />
          </div>
          <div>
            <input  type="text" placeholder="Buscar"/>
          </div>
         
            <i  class="fas fa-search"></i>
          
          
          <div>
            
                <button>Inicio</button>
            
            
                <button>Siguiendo</button>
            
          
          <button>Valeska</button>
          
          
          <button><i class="fas fa-comment-dots"></i></button>
         
          
          <button><i class="fas fa-bell"></i></button>
          
          
          <button><i class="fas fa-ellipsis-h"></i></button>
          
          </div>
        </header>
      
    );
  }
  
  export default Above;
  
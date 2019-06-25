import React, {Component} from 'react';
import pinterest from './img/pinterest.png'
import './styles/StyleAbove.css';


class Above extends Component {
  constructor(props){
    super(props);
    this.state={input: ''}
    this.inputValue = React.createRef();
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.setinput=this.setinput.bind(this);

  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
//se ejecuta cuando se presiona enter
  handleEnter() {
    
    this.props.Search(this.state.input);
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
//agrega el valor del input al state
  setinput= ()=>{
    this.setState({
      input: this.inputValue.current.value
    })
   }


  render(){
    return (
      
      <header>
          
        <div>
          <img id="logo-pin"src={pinterest}  alt="logo" />
        </div>
        <div>
          <span><i className="fas fa-search" id="search"></i></span>
        
        
          <input  ref = {this.inputValue} type="text" placeholder="Buscar" onChange={this.setinput}/>
          </div>
      
        
        <div className="div-buttons">
          
              <span>Inicio</span>
          
          
              <span>Siguiendo</span>
          
        
              <span>Valeska</span>
              
              
              <span><i className="fas fa-comment-dots"></i></span>
            
              
              <span><i className="fas fa-bell"></i></span>
              
              
              <span><i className="fas fa-ellipsis-h"></i></span>
        
        </div>
      </header>
    
  );

  }
    
  }
  
  export default Above;
  

 
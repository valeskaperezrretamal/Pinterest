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
      input: this.inputValue.value
    })
   }


  render(){
    return (
      
      <header>
          
        <div>
          <img src={pinterest}  alt="logo" />
        </div>
        <div>
          <input  ref = {this.inputValue} type="text" placeholder="Buscar" onChange={this.setinput} value={this.state.input}/>
        </div>
        <div>
          <button ><i class="fas fa-search"></i></button>
        </div>
        
        <div className="div-buttons">
          
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
    
  }
  
  export default Above;
  
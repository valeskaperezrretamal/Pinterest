import React,{Component} from 'react';
import Above from './Above.js';
import Content from './Content.js';
import {GetImgs} from './Unplash.js';




class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      images: [],
      query: 'dog',
      page: 1,
        }
       
  }
  //al iniciar o referescar muestra las 20 fotos
  componentDidMount= ()=>{
    
    this.RefreshImgs();
    
  }
  //para hacer scroll y que carge 20 fotos
  
  render(){ 
  return (
    <div className="App">
      <Above Search = {this.Search} />
      
      <Content images= {this.state} addImg={this.Scroll} />
     
    </div>
  );
  }
//función para cambiar el estado
  RefreshImgs =async ()=>{
    //para busquedas nuevas
    try{
      if (this.state.page === 1){
        GetImgs(this.state.query, this.state.page).then(
          newstate=>{
            this.setState(newstate);
          })
      }
      //para scrolls.
      else {
        GetImgs(this.state.query, this.state.page).then(addState =>{
          this.setState((state, props)=>{
            return {...state,
            images: state.images.concat(addState.images)}
          })

          
        })


        }
    }
    catch (error){
      console.log('Error',error);
    }     
  }
  //función que se llama desde input (componente above)
  Search=(query)=>{
    this.setState((state, props)=>{
      return {...state, query: query, page: 1};
    });
    window.scroll(0, 0);
    this.RefreshImgs();
  }
  Scroll = ()=>{
    //numero de pagina
    let newPage = this.state.page + 1;
    this.setState((state, props)=>{
      return {...state, page: newPage}
    });
    return this.RefreshImgs();
    
  }
}

export default App;

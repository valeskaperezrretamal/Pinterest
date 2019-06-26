import React,{Component} from 'react';
import Above from './Above.js';
import Content from './Content.js';
import {GetImgs} from './Unplash.js';
import images from './Images.js';



class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      images: [],
      query: 'perros',
      page: '1',
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
      <Content images= {this.state}/>
      <Images/>
    </div>
  );
  }
//función para cambiar el estado
  RefreshImgs =async ()=>{
    //para busquedas nuevas
    try{
      if (this.state.page === '1'){
        GetImgs(this.state.query, this.state.page).then(
          newstate=>{
            this.setState(newstate);
          })
      }
      //para scrolls.
      else {
        this.setState(async (state, props)=>{
          let Add = await GetImgs(state.query, state.page);
          return {...state,
          page: Add.page,
          query: Add.query,   
          images: state.images.concat(Add.images)}

      })}
    }
    catch (error){
      console.log('Error',error);
    }     
  }
  //función que se llama desde input (componente above)
  Search=(query)=>{
    this.setState((state, props)=>{
      return {...state, query: query, page: '1'};
    }); 
    this.RefreshImgs();
  }
}

export default App;

import React,{Component} from 'react';
import Above from './Above.js';
import Content from './Content.js';
import {GetImgs} from './Unplash.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      query: '',
      page: '1',
        }
  }
  

 

  render(){ 
  return (
    <div className="App">
      <Above Search = {this.Search} />
      <Content/>
    </div>
  );
  }
//función para cambiar el estado
  RefreshImgs =()=>{
    //para busquedas nuevas
    if (this.state.page === '1'){
      this.setState((state,props)=>{
        return GetImgs(state.query, state.page);
      })
    }
    //para scrolls.
    else {
      this.setState((state, props)=>{
        let Add = GetImgs(state.query, state.page);
        return {...this.state,
        page: Add.page,
        query: Add.query,   
        images: this.state.images.concat(Add.images)}

    })}
    
    
  }
  //función que se llama desde input (componente above)
  Search=(query)=>{
    this.setState((state, props)=>{
      return {...this.state, query: query, page: '1'};

    })


  }
}

export default App;

import React,{Component} from 'react';
import Images from './Images';


class Content extends Component {
    constructor(props){
        super(props);
        this.divContent = React.createRef();
        this.loading=false;
        
	}
    
	componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
	};
    handleScroll = e => {
       /*  console.log("scrollY: "+window.scrollY);
        console.log("offsetHeight: "+ this.divContent.current.offsetHeight);
        console.log("innerHeight: "+ window.innerHeight); */
         /*console.log(this.divContent.current.offsetHeight - window.scrollY - window.innerHeight ) */
        
        if (this.divContent.current.offsetHeight - window.scrollY + 90 === window.innerHeight) {
            
            this.props.addImg();
            console.log('Scroll');                
        }
        
        
      }

    images=()=>{
        return this.props.images.images.map(element => {
            return <Images thumb={element.thumb } tag={element.tag} portafolio_url={element.portafolio_url}/> 
        })
    }
    
    render(){
        return(
            <div id="id-content" ref={this.divContent}>
                 
                {this.images()}
                
                
                
            </div>
    
        );

    

    }
    
}

export default Content;


//window.onscroll = ()=> {
  //  console.log('Estas scrolleando');
  //};
  //let screen = "";
  //alert('el alto de la pantalla es '+ screen.availHeight);


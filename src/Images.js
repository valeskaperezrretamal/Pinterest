import React,{Component} from 'react';
import ReactModal from 'react-modal';



class Images extends Component {
    constructor(props){
      super(props);
        this.state = {
                    hover: false,
                    showModal: false
                } ;
        
        this.toggleHover=this.toggleHover.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    
    toggleHover() {
        this.setState({ hover: !this.state.hover })
    }
    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }

    render(){
        
        const style = {
            
            div:{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '7px 7px 7px 7px',
                
                
                
            },
            img:{
                top:'35px',
                left: '0px',
                borderRadius: '7px 7px 7px 7px',
                margin: '10px',
                marginBottom: '50px',
                filter: 'brightness(1)'
            },
            spantag:{
                
                top: '16px',
                left: '17px',
                float: 'right',
                position: 'absolute',
                width: '117px',
                height: '35px',
                backgroundColor: '#e2e2e2',
                borderRadius: '6px 0px 0px 6px',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                fontSize: '16px',
                fontWeight: '600',
                opacity: '0'
            },
            spanarrow: {
                position: 'absolute',
                left: '113px',
                top: '13px',
                
                
            },
            iarrow: {
                zIndex: '80',
                opacity: '0'
            },
            spansave: {
                position: 'absolute',
                top: '16px',
                left: '133px',
                width: '70px',
                height: '35px',
                backgroundColor: 'rgb(202, 31, 31)',
                borderRadius: '0px 6px 6px 0px',
                color: 'white',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                fontSize: '16px',
                fontWeight: '600',
                opacity: '0'
            },
            spanportfolio_url: {
                position: 'absolute',
                bottom: '64px',
                left: '38px',
                width: '117px',
                height: '22px',
                backgroundColor: 'rgb(73, 71, 71)',
                borderRadius: '0px 6px 6px 0px',
                color: 'white',
                opacity: '0'
            },
            spanurlarrow: {
                position: 'absolute',
                bottom: '64px',
                left: '13px',
                
                
            },
            iurlarrow:{
                backgroundColor: 'rgb(73, 71, 71)',
                borderRadius: '6px 0px 0px 6px',
                left: '5px',
                width: '11px',
                height: '12px',
                bottom: '0px',
                opacity: '0'


            },
            spanshare: {
                position: 'absolute',
                bottom: '88px',
                left: '174px',
               
            },
            ishare: {
                backgroundColor: 'rgb(73, 71, 71)',
                borderRadius: '100px',
                opacity: '0'
                
            },
            spanellipsis: {
                position: 'absolute',
                bottom: '52px',
                left: '168px',
                
            },
            modal: {
                zIndex: '98'
            },
            imgmodal: {
                zIndex: '99',
                top:'35px',
                left: '0px',
                borderRadius: '7px 7px 7px 7px',
                margin: '10px',
                marginBottom: '50px',
                filter: 'brightness(1)',
                width: '400px',
                height: '500px'


            },
            close: {
                right: '0%'
            }
            
            
        };

        if (this.state.hover) {
            style.div.backgroundColor= '#F2F2F2';
            style.img.filter= 'brightness(0.8)';
            style.spantag.opacity= '1';
            style.iarrow.opacity= '1';
            style.spansave.opacity= '1';
            style.spanportfolio_url.opacity= '1';
            style.iurlarrow.opacity= '1';
            style.ishare.opacity= '1';
          }
        if (this.state.showModal){
            
        }
          
        return(
            <div>
                <div style={style.div} onClick={this.handleOpenModal} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    <img src={this.props.thumb} style={style.img}></img>
                    <span style={style.spantag}>{this.props.tag}</span>
                    <span style={style.spanarrow}><i style={style.iarrow} class="fas fa-angle-down"></i></span>
                    <span style={style.spansave}>Guardar</span>
                    <span style={style.spanellipsis}><i class="fas fa-ellipsis-h"></i></span>
                    <span style={style.spanportfolio_url}>{this.props.portfolio_url}</span>
                    <span style={style.spanurlarrow}><i style={style.iurlarrow} class="fas fa-arrow-up"></i></span>
                    <span style={style.spanshare}><i style={style.ishare} class="fas fa-arrow-alt-circle-up"></i></span>
                    
                </div>
                <ReactModal style={style.modal} isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
                    <button onClick={this.handleCloseModal} style={style.close}>X</button>
                    <img src={this.props.regular} style={style.imgmodal}></img>
                    
                </ReactModal>

            </div>

        );
    }
}

export default Images;

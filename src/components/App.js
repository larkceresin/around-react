import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEditAvatarOpen: false,
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
            isImagePopupOpen: false,
            selectedCard: "",
        }
    }
    handleCardClick(data) {
        this.setState({selectedCard:{data},
                       isImagePopupOpen: true,
                      });
        
    }
    
    handleEditAvatarClick = (e) => {
        this.setState({isEditAvatarOpen: true})
    }
    
    handleEditProfileClick = (e) =>{
       this.setState({isEditProfileOpen: true})
   
    }
    
    handleAddPlaceClick = (e) => {
        this.setState({isAddPlaceOpen: true})
    }
    closeAllPopups = (e) => {
        if(e.target === e.currentTarget)
        this.setState({isEditAvatarOpen: false,
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
            selectedCard: {name:"",
                          link:""},
        })
    }
    
    render(){
        return (
          <div className="page">
            <div className="page__content">
                <Header/>
                <Main 
            onEditProfile={this.handleEditProfileClick} 
            isEditProfileOpen={this.state.isEditProfileOpen} 
            onAddPlace={this.handleAddPlaceClick} 
            isAddPlaceOpen={this.state.isAddPlaceOpen} 
            onEditAvatar={this.handleEditAvatarClick} 
            isEditAvatarOpen={this.state.isEditAvatarOpen}
            onCardClick={this.handleCardClick()}
            card={this.state.selectedCard}
            isImagePopupOpen={this.state.isImagePopupOpen}
            onClose={this.closeAllPopups} />
                <Footer/>

            </div>
        </div>
        );
    }
}

export default App;

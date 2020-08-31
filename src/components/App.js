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
        }
    }
    
    handleEditAvatarClick = (e) => {
        this.setState({isEditAvatarOpen: true})
//        document.querySelector(".popout__container_picture-change").classList.add('popout__container_active')   
    }
    
    handleEditProfileClick = (e) =>{
       this.setState({isEditProfileOpen: true})
        // document.querySelector(".popout__container_profile-edit").classList.add('popout__container_active')    
    }
    
    handleAddPlaceClick = (e) => {
        this.setState({isAddPlaceOpen: true})
        //document.querySelector(".popout__container_gallery-add").classList.add('popout__container_active')
        
    }
    closeAllPopups = (e) => {
        if(e.target === e.currentTarget)
        this.setState({isEditAvatarOpen: false,
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
        })
    }
    
    render(){
        return (
          <div className="page">
            <div className="page__content">
                <Header/>
                <Main onEditProfile={this.handleEditProfileClick} isEditProfileOpen={this.state.isEditProfileOpen} onAddPlace={this.handleAddPlaceClick} isAddPlaceOpen={this.state.isAddPlaceOpen} onEditAvatar={this.handleEditAvatarClick} isEditAvatarOpen={this.state.isEditAvatarOpen} onClose={this.closeAllPopups} />
                <Footer/>

            </div>
        </div>
        );
    }
}

export default App;

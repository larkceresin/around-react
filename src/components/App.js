import React, {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App(props){
    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setisEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setisAddPlaceOpen] = useState(false);
    const [isisImagePopupOpen, setisImagePopupOpen] = useState(false);
    const [SelectedCardLink, setSelectedCardLink] = useState("");
    const [SelectedCardName, setSelectedCardName] = useState("");
    constructor(props){
        super(props);
        this.state = {
            isEditAvatarOpen: false,
            isEditProfileOpen: false,
            isAddPlaceOpen: false,
            isImagePopupOpen: false,
            selectedCardLink: "",
            selectedCardName:"",
        }
    }
    function handleCardClick(link, name) {
        setSelectedCardLink(link);
        setSelectedCardName(name);
        setIsImagePopupOpen(true);    
    }
    
    const handleEditAvatarClick = (e) => {
       setIsEditAvatarOpen(true);
    }
    
    const handleEditProfileClick = (e) =>{
       setIsEditProfileOpen(true)
    }
    
    const handleAddPlaceClick = (e) => {
        setIsAddPlaceOpen(true);
    }
    const closeAllPopups = (e) => {
        if(e.target === e.currentTarget)
            setIsEditAvatarOpen(false);
            setIsEditProfileOpen(false);
            setIsAddPlaceOpen(false);
            setSelectedCardName("");
            setSelectedCardLink("");
            setIsImagePopupOpen(false);
        })
    }
    
    render(){
        return (
          <div className="page">
            <div className="page__content">
                <Header/>
                <Main 
            onEditProfile={this.handleEditProfileClick} 
            isEditProfileOpen={isEditProfileOpen} 
            onAddPlace={this.handleAddPlaceClick} 
            isAddPlaceOpen={isAddPlaceOpen} 
            onEditAvatar={this.handleEditAvatarClick} 
            isEditAvatarOpen={isEditAvatarOpen}
            onCardClick={(data) => this.handleCardClick(data)}
            cardName={selectedCardName}
            cardLink={selectedCardLink}
            isImagePopupOpen={isImagePopupOpen}
            onClose={this.closeAllPopups} />
                <Footer/>

            </div>
        </div>
        );
    }
}

export default App;

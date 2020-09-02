import React, {useState} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';

function App(props){
    const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
    const [selectedCardLink, setSelectedCardLink] = useState("");
    const [selectedCardName, setSelectedCardName] = useState("");
    
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
        }
    
        return (
          <div className="page">
            <div className="page__content">
                <Header/>
                <Main 
            onEditProfile={handleEditProfileClick} 
            isEditProfileOpen={isEditProfileOpen} 
            onAddPlace={handleAddPlaceClick} 
            isAddPlaceOpen={isAddPlaceOpen} 
            onEditAvatar={handleEditAvatarClick} 
            isEditAvatarOpen={isEditAvatarOpen}
            onCardClick={(data) => handleCardClick(data)}
            cardName={selectedCardName}
            cardLink={selectedCardLink}
            isImagePopupOpen={isImagePopupOpen}
            onClose={closeAllPopups} />
                <Footer/>

            </div>
        </div>
        );
}

export default App;

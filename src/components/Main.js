import React, {useState, useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';
import Input from './Input.js'
import ImagePopup from './ImagePopup.js'
import api from '../utils/Api.js';
import Card from './Card.js';


function Main(props){

    const [userName, setUserName] = useState("");
    const [userDescription, setUserDescription] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [cards, setCards] = useState([]);
    api.getUserInfo().then((res)=>{
        setUserName(res.name)
        setUserDescription(res.about)
        setUserAvatar(res.avatar)
    });
    useEffect(() => {
    api.getCardList()
        .then((res)=>res.forEach((item)=> cards.push(item)));
        });
    return(
        <>
          <section className="profile">
            <div className="profile__info">
                <div className="profile__picture_overlay">
                    <img className="profile__picture" src={userAvatar} alt={userName} onClick={props.onEditAvatar}/>
                </div>
                <div className="profile__name-line">
                    <h1 className="profile__name">{userName}</h1>  
                    <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                </div>
               
                <p className="profile__profession">{userDescription}</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        
        <section className="gallery">
            <ul className="gallery__grid">
                {cards.map((card, index)=>{
                return <Card key={index} link={card.link} name={card.name} onCardClick={()=> props.onCardClick(card.link, card.name)} likes={card.likes.length}/>;
                })}
            </ul>
        </section>
            
            
        <PopupWithForm name="profile-edit" title="Edit profile" buttonText="Save" isOpen={props.isEditProfileOpen} onClose={props.onClose}>
            <Input name="name"/>
            <Input name="profession"/>
        </PopupWithForm>

        <PopupWithForm name="gallery-add" title="New Place" buttonText="Create" isOpen={props.isAddPlaceOpen} onClose={props.onClose}>
            <Input name="name"/>
            <Input name="link"/>
        </PopupWithForm>

        <PopupWithForm name="picture-change" title="Change profile picture" buttonText="Save" isOpen={props.isEditAvatarOpen} onClose={props.onClose}>
            <Input name="avatar"/>
        </PopupWithForm>

        <PopupWithForm name="delete" title="Are you sure?" buttonText="Yes"/>

        <ImagePopup isOpen={props.isImagePopupOpen} name={props.cardName} link={props.cardLink} onClose={props.onClose}/>
    </>
    )
}
export default Main

import React, {useState} from 'react';
import image from '../images/Jacques-Cousteau.jpg';
import {PopupWithForm, Input} from './PopupWithForm.js';
import api from '../utils/Api.js';

let userInfo = [];

    api.getUserInfo().then((res)=>{res.forEach((item)=> userInfo.push(item));


function Main(props){
    const [userName, setUserName] = useState('userInfo.');
    const [userDescription, setUserDescription] = useState('Explorer');
    const [userAvatar, setUserAvatar] = useState('https://image.shutterstock.com/image-illustration/image-flu-covid19-virus-cell-600w-1661849266.jpg');
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
               
                <p className="profile__profession">Explorer</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace}></button>
        </section>
        
        <section className="gallery">
            <ul className="gallery__grid">  </ul>
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
        </>
    )}
export default Main
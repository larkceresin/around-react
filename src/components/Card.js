import React from 'react';

function Card(props){
        return(
            <li className="gallery__container">
                        <img className="gallery__image" src={props.link} alt={props.name} onClick={props.onCardClick({name:props.name, link:props.link})}/><button className="gallery__trash-button"></button>
                        <div className="gallery__group"><h3 className="gallery__text"> {props.name}</h3><div className="gallery__like-container"><button className="gallery__like-button"></button><p className="gallery__like-count">{props.likes}</p></div></div>
                    </li>

        )
}
export default Card
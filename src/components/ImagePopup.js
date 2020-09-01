import React, {useState} from 'react';

function ImagePopup(props){
    const [card, setCard] = useState({name:"",
                                    link:""});
   // setCard(props.card);
     return(
         <section className="popout popout_picture-view">
            <div className='popout__container popout__container_picture-view ${props.isOpen ? "popout__container_active" : ""}' onClick={props.onClose}>
                <button className="popout__close-button" onClick={props.onClose}></button>
                <figure className="popout__picture-container">
                    <img className="popout__picture" src={card.link} alt={card.name}/>
                    <figcaption className="popout__title">{card.name}</figcaption> 
                </figure>
            </div>
        </section>
     )
    
 }
export default ImagePopup
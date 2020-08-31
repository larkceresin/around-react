import React from 'react';

function ImagePopup(){
     return
         <section className="popout popout_picture-view">
            <div className="popout__container popout__container_picture-view">
                <button className="popout__close-button"></button>
                <figure className="popout__picture-container">
                    <img className="popout__picture" />
                    <figcaption className="popout__title"></figcaption> 
                </figure>
            </div>
        </section>
    
 }
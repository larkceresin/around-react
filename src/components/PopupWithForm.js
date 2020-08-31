import React from 'react';

function PopupWithForm(props){
    return <section className="popout" >
        <div className={`popout__container popout__container_${props.name} ${props.isOpen ? "popout__container_active" : ""}`} onClick={props.onClose}>
            <button className="popout__close-button" onClick={props.onClose}></button>
            <form className="popout__form" name={props.name}>
                <h2 className="popout__form-text">{props.title}</h2>
                 {props.children}
                <button className="popout__button" type="submit" value={props.buttonText}>{props.buttonText}</button>

            </form>
        </div>
    </section>

}

function Input(props){
    return <>
        <input required id={props.name} className={`popout__form-input popout__form-input_type_${props.name}`} type="text" name={props.name} placeholder={props.name} />
        <span id="name-error" className={`popout__form-input-error popout__form-input_type_${props.name}-error`}></span>
  
    </>
}


export {PopupWithForm, Input}
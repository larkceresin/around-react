import React from 'react';

function Input(props){
    return <>
        <input required id={props.name} className={`popout__form-input popout__form-input_type_${props.name}`} type="text" name={props.name} placeholder={props.name} />
        <span id="name-error" className={`popout__form-input-error popout__form-input_type_${props.name}-error`}></span>
  
    </>
}
export default Input

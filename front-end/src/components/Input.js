import React, { useEffect, useState, useRef } from 'react';
import SelectOption from './SelectOption';
import './css/Input.css';
function Input({options,setContact,contact,setValue}){
    const checkboxRef=useRef();
    const{label,name,checkbox,dropDown,datapoint,type}=options
    const setCheck=(checkValue)=>{
        if(contact===checkValue){
            checkboxRef.current.checked=true;
        }
        else{
            checkboxRef.current.checked=false;           
        }

    }
    const checkClicked=(checkValue)=>{
        if(contact!==checkValue){
            setContact(checkValue)          
        }
    }
    
    useEffect(() => {
        if(checkbox)
        {setCheck(name)}
    }, [contact])
    
  return(
    <div>
   <span> {checkbox? <input type='checkbox' name={name} ref={checkboxRef} onChange={()=>{checkClicked(name);}}/>:null}<label>{label}</label></span>
   {dropDown ? <SelectOption name={name} datapoint={datapoint} setValue={setValue}/>:<input name={name} type={type} onChange={(e)=>{setValue(e)}}autoComplete='new-password'/>}
    </div>
  )
  
  }

export default Input
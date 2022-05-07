import React, { useEffect, useState } from 'react';
import Input from './Input';
import './css/Form.css';

function Form({fieldNames,dataPoints}){
    const [data,setData]= useState([])
    const [contact,setContact]= useState(null)
    const [error,setError]= useState(false)
    const [msg,setMessage]= useState(null)

    const finalObject=(fieldNames)=>{
      var info={};
      for(var i=0;i<fieldNames.length;i++){
            var key = fieldNames[i].name;
            var value = '';
            info[key] = value;
      }
      setData(info)  
    }
    const setValue=(event)=>{
        let values = data
        values[event.target.name]=event.target.value;
        setData(values);      
    }
    const submit=(event)=>{
        if(contact){data['prefered']=contact}
        event.preventDefault()
        fetch(dataPoints.post,{
            method:'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(ans=>{
            var {error,message}= ans;
                setError(error)
                setMessage(message)
            if(!error){
                event.target.reset();
                finalObject(fieldNames)
            }
        })
    }    
    useEffect(() => {
      finalObject(fieldNames)
    }, [])
    useEffect(()=>{
            setTimeout(()=>{setError(false);setMessage(null)},7000)
    }, [msg])
    return(<form onSubmit={e=>submit(e)}>
      <div>
      {fieldNames.map(nameObj=><Input key={nameObj.name} contact={contact} options={nameObj} setContact={setContact} setValue={setValue}/>)}
         
      </div>  
      {error && msg ? <p className='error'>{msg}</p>: !error && msg ? <p className='message'>{msg}</p>:null} 
    
             <p>Please Check how you prefer to be notified</p>
         
        <input type='submit' value='submit'/>
        
    </form>)
  }

export default Form;
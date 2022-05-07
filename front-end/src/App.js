import React, {useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {
  
  const dataPoints={supervisors:'/server/api/supervisors',post:'/server/api/submit'}

  const formFieldNames=[{label:'First Name',name:'firstName',type:'text'},
                        {label:'Last Name',name:'lastName',type: 'text'},
                        {label:'Email',name:'email',checkbox:true,type:'email'},
                        {label:'Phone Number',name:'phoneNumber',checkbox: true,type:'tel'},
                        {label:'Supervisor',name:'Supervisor', dropDown:true, datapoint: dataPoints.supervisors},]
  
  
  return (
    <div className="App">
      <div className='App-header'>
          <h3>Notification Form</h3>
      </div>
      <div className='formContainer'>
      <Form fieldNames={formFieldNames} dataPoints={dataPoints}/>


      </div>

    </div>
  );
}

export default App;

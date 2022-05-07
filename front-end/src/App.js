import React, {useState } from 'react';
import './App.css';
import Form from './components/Form';


function App() {
  
  const dataPoints={supervisors:'http://localhost:4000/api/supervisors',post:'http://localhost:4000/api/submit'}

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

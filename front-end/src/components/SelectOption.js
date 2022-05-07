import React, { useEffect, useState } from 'react';
function SelectOption({datapoint,setValue,name}){
    const [data,setData]= useState([])
   
    const getData=()=>{
      fetch(datapoint)
      .then(res=>res.json())
      .then(info=>{setData(info)})
      .catch(e=>console.log(e))
    }
    useEffect(() => {
      getData()
    }, [])
    return(
      <select className='dropDown' name={name} onChange={(e)=>{setValue(e)}}>
        <option value=''>Select...</option>
        {data? data.map(d=><option key={d} value={d}>{d}</option>):null}
      </select>
    )
  
  }
  export default SelectOption;
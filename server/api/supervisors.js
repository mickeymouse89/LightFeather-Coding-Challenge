const https = require('https');
const supervisorsDatapoint=require('../config/supervisorsDatapoint');
module.exports= supervisors=(req,res)=>{

        let supers='';

      const get = https.request(supervisorsDatapoint, result => {
        result.on('data',d => {
            supers+= d;              
        });
        result.on('end',()=>{
           var su= JSON.parse(supers)
           var supervisors=su.sort( (a, b)=> {
               return a.jurisdiction.localeCompare(b.jurisdiction) || a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName);
            }).map(sup=> `${sup.jurisdiction} - ${sup.lastName}, ${sup.firstName}` );
        
        res.json(supervisors)})
      });
      
      get.on('error', error => {
        console.error(error);
      });
      
      get.end();
    
}
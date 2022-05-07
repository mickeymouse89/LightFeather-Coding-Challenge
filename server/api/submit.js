module.exports=submit=(req,res)=>{
    const {firstName,lastName,email,phoneNumber,Supervisor} = req.body;
    if(lastName===''||firstName===''||Supervisor===''){
        res.json({error:true, message:'Please Make sure First Name, Last Name, And Supervisor ields are filled'})
    }
    else{
      res.json({error:false,message:'Thanks!!'})
    }
    console.log(req.body)
    for (var key in req.body){
      console.log(key)
      console.log(req.body[key])
      console.log('------------------------')
  }
}
const express=require("express")
const app=express()

app.get('/',(req,res)=>{
    res.send('"Hello,World!"')
})

app.listen(3000,()=>{
        console.log("server connected to the port 3000 Thank you so please select me")
})
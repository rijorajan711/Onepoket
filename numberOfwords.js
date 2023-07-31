const fs=require("fs")

    fs.readFile("./data.txt","utf-8",(err,data)=>{
             const arr=data.split(" ")
             const arrLength=arr.length
            console.log(arrLength)
    }) 
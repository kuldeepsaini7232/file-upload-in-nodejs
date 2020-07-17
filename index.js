const express=require("express");
const formidable=require("formidable");
const app=express();

app.get("/",(req,res)=>{
    res.sendfile(__dirname+"/index.html");
})
app.post("/",(req,res)=>{
    var form=new formidable.IncomingForm();
    form.parse(req);
    form.on("fileBegin",(name,file)=>{
        file.path=__dirname +'/uploads/' + file.name;
        form.on('file',(name,file)=>{
            console.log("uploaded file"+file.name)
        })
    })
    res.sendfile(__dirname+"/index.html");
})
app.listen(1100,()=>{
    console.log("hello")
})
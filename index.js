const express = require('express');

const app=express();


app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html');
});

app.get('/aboutPage',(req,res)=>{
res.sendFile(__dirname+'/aboutPage.html');
});

app.get('/songs',(req,res)=>{
res.sendFile(__dirname+'/songs.html');
});

app.get('/photos',(req,res)=>{
res.sendFile(__dirname+'/photos.html');
});

app.listen(3000,()=>{
console.log('Server started on port 3000');
});
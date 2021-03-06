const express = require('express');
const app = express();
const cors = require('cors');
const Pelis = require("./peliculas");

app.use(cors());

app.get("/", function(req,res){
    res.status(200).json({status:"success",message:"Api de peliculas desarrollada para la clase numero 3 del taller de Javascript - Cardumen Latam",author:"Luis Vilches"});
})

app.get("/peliculas", function(req,res){
    res.status(200).json({status:"success",data:Pelis,total:Pelis.length});
})

app.get("/peliculas/:id", function(req,res){
    var result = Pelis.filter(item => {
        if(item.id == req.params.id){
            return item;
        }
    });

    if(result.length == 0){
        res.status(500).json({status:"error",message:"Pelicula no encontrada"});
    } else {
        res.status(200).json({status:"success",data:result[0]});
    }
})

app.get("/genders",(req,res) => {
    res.status(200).json({data:[
        "accion","aventura","drama","comedia","infantil","familiar","ciencia ficcion","fantastico",
        "policiaco","misterio","thriller","suspenso","romantico","espionaje","steampunk","ficcion especulativa",
        "aprendizaje","infantil","adulto joven","baile"
    ]});
})


app.listen(process.env.PORT || 5000, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("running server");
    }
})
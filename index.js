const express = require('express');
const app = express();
const cors = require('cors');
const Pelis = require("./peliculas");

app.use(cors());

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


app.listen(process.env.PORT || 5000, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("running server");
    }
})
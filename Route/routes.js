/**
 * Created by user on 7/21/2018.
 */
let apiGet = require('../apiGet');
let file=require('fs');

var router=function (app) {
    app.get('/myMovies',(req,res)=>{
        console.log();
        file.appendFile('acess.txt',req.ip,function(err){
            console.log(err);
        })
        apiGet.getAllData().then(function (data) {
            res.send(data);
        })

    });

    app.get('/myMovies/:id',(req,res)=>{
        apiGet.getDataById(req.params.id).then(function (data) {
            res.send(data);
        })

    });
}

module.exports=router;

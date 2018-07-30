/**
 * Created by user on 7/21/2018.
 */
let getData = require('./apiGet');
let express = require('express');
const app = express();
let router= require('./Route/routes');
let file=require('fs');



app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    next();
});
router(app);

try {
    app.listen(3000,function (error) {
        if (error) {
            throw error;
        }
        console.log("the port has been activited")
    })
}catch(error){
        console.log(error);
        file.appendFile(error.name+'.txt', error+'\n'+Date());
    console.error("you made mistake");
}

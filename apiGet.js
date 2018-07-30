let request=require('request');
let file=require('fs');

try {
    function getAllData() {
        return new Promise(function (resolve, reject) {
            request.get('https://yts.am/api/v2/list_movies.json', (err, response, body)=> {
                if (err) {
                    throw err;
                }
                let json = JSON.parse(body);
                console.log(json);
                resolve(json);
                
            })
        })

    }
}catch(err){
    console.log(err);
    file.appendFile(error.name+'.txt', error+'\n'+Date());
    console.error("you made mistake");
}




function getDataById(id){
    return new Promise(function (resolve,reject) {
        request.get('https://yts.am/api/v2/movie_details.json?movie_id='+id,(err,response,body)=>{
            if(err){
                throw err;
            }
            let json =JSON.parse(body);
            resolve(json);
        })
    })

}


module.exports={
    getAllData,
    getDataById
}
'use strict';

(function placekitten () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://wwww.placekitten.com/api", true);
    xhr.onload = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(xhr.response)
        }else{
            console.log(error);
        }
        
    };
    xhr.send();
    
})()


// using axius
/*
(function (){
    axios.get("https://wwww.placekitten.com/api")
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
    console.log(error);
    })
    
})();*/







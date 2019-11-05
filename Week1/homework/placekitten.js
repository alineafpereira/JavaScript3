(function placekitten () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://wwww.placekitten.com/api");
    xhr.send();
   
    xhr.addEventListener = ('load', function(){
        const data = JSON.parse(this.response);
        if (data.status >= 400){
            console.log(data);
        }else{
            console.log(data);
        }
    })
})()


// using axius

(function (){
    axios.get("https://wwww.placekitten.com/api")
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
    console.log(error);
    })
    
})();







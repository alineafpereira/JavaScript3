(function reqListener () {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://wwww.placekitten.com/api");
    oReq.send();
    oReq.responseType = 'json';
    console.log(oReq.response);

    oReq.addEventListener('load', function (event) {
        const data = JSON.parse(this.response);
    
        if(data.cod >= 400){
            console.log(data.coord.lat);
        } else{
            console.log(data.coord.lat);
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
    }).finally(function () {
    console.log('I am always here')
    })
})();







(function reqListener () {
    const oReq = new XMLHttpRequest();
    oReq.open("GET", "https://www.randomuser.me/api");
    oReq.send();
    console.log(oReq.response);

    oReq.addEventListener('load', function() {
        const data = JSON.parse(this.response);
    
        if(data.status >= 400){
            console.log("this is error!");
        } else{
            console.log(data);
        }   
    })
})()


// using axius

(function (){
    axios.get("https://www.randomuser.me/api")
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
    console.log(error);
    })
})();







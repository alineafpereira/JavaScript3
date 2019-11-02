(function reqListener () {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://picsum.photos/400");
    oReq.responseType = 'json';
    oReq.send();

    (oReq.addEventListener = () => {
        const data = JSON.parse(this.response);
    
        if(data.cod >= 400){
            console.log(data.coord.lat);
        }else{
            document.body.innerHTML = data;
        }   
    })
})()


// using axius
/*
(function (){
    const picture = axios.get("https://picsum.photos/400")
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
    console.log(error);
    }).finally(function () {
    document.body.innerHTML = picture;
    })
})();
*/






(function photo () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://picsum.photos/400");
    xhr.send();

    xhr.addEventListener ('load', function () {
        const data = JSON.parse(xhr.response);
    
        if(data.status >= 400){
            console.log(data);
        }else{
            const img = document.createElement("img");
            document.body.appendChild(img);
            img.appendChild(data);
        }   
    })
})()


// using axius

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







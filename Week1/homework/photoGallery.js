const body = document.getElementsByTagName('body');
(function photo () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://picsum.photos/400", true);
    xhr.onload = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('photo').setAttribute('src', xhr.responseURL);
        }else{
            console.log(error);
        }   
    }
    xhr.send();
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






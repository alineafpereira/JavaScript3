(function newFriend () {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.randomuser.me/api", true);
    xhr.onload = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log(JSON.parse(xhr.response))
        }else{
            console.log(error);
        }  
    }
    xhr.send();
})()


// using axius
/*
(function (){
    axios.get("https://www.randomuser.me/api")
    .then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
    console.log(error);
    })
})();
*/




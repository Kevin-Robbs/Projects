function autoPlay(){
    var myMovie = document.querySelector("#video_bw");
    myMovie.play()
}

function autoPause(){
    var myMovie = document.querySelector("#video_bw");
    myMovie.pause()
}

function subscribeStatus(){
    var status = document.querySelector('#sub_button');

    if(status.textContent == "Subscribe"){
        status.textContent = "Subscribed"
    }
    else{
        status.textContent = "Subscribe"
    }
}

function remove_item(item){
    item.parentNode.remove()
} 

function loggedStatus(){
    var status = document.querySelector(".login_button")

    if(status.textContent == "Login"){
        status.textContent = "Logout"
    }
    else{
        status.textContent = "Login"
    }
}
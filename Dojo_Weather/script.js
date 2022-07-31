function consumeCookie(){
    var banner = document.querySelector('.cookie-banner')

    banner.remove()
}

function tempConvert(temp){
    value = temp.options[temp.selectedIndex].value

    var element = document.querySelectorAll(".temp-value")

    for (var i = 0; i < element.length; i++) {
        if(value == 'f'){
            element[i].innerHTML = parseInt(element[i].innerHTML) * 2 + 32
        }
        if(value == "c"){
            element[i].innerHTML =  (parseInt(element[i].innerHTML) -32) * .5
        }
    }
}
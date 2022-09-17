
/*
############################
    Declaring variables
############################
*/

let bound      //array used to store all the boundaries
let begin      //

/*
############################
            Main
############################
*/

window.onload = () => {
    // begin = document.getElementById("start")
    bound = document.getElementsByClassName("boundary")
    for (let i = 0; i<bound.length; i++){
        bound[i].onmouseover = touchBoundary
    }
}

/*
############################
       Other Functions
############################
*/

let touchBoundary = () => {
    for (let i = 0; i<bound.length - 1; i++){
        bound[i].style.backgroundColor = "red"
    }
}
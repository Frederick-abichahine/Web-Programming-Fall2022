
/*
#################################################
    Declaring variables (& initializing some)
#################################################
*/

let boundaries        //array used to store all the boundaries
let begin             //variable to ensure that the user wants to start the game
let flag = false      //this flag will indicate if the user hovered over "S" or not in order to properly start the game

/*
#################################################
                      Main
#################################################
*/

window.onload = () => {

    begin = document.getElementById("start")
    begin.onmouseover = touchStart                                 //this will enter the function touchStart whent the player hovers over "S" to properly start the game
    boundaries = document.getElementsByClassName("boundary")

    for (let i = 0; i<boundaries.length; i++){
        boundaries[i].onmouseover = touchBoundary                  //this will ensure that the borders turn red if the player hovers over them
    }
}

/*
#################################################
                Other Functions
#################################################
*/

let touchBoundary = () => {

    if(flag){ //this will check if the user hovered over "S" first to ensure that the borders turn red ONLY AFTER the user decides to start the game

        for (let i = 0; i<boundaries.length - 1; i++){
            //boundaries[i].style.backgroundColor = "#ff8888"
            boundaries[i].className += " youlose" //This will override the original boundary color using the present youlose color in the CSS file
        }
    }
}

let touchStart = () => {

    flag = true //to ensure that the user started the game and only now will the borders turn red after hovering over "S"
}

let touchEnd = () => {

}
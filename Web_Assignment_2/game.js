
/*
#################################################
    Declaring variables (& initializing some)
#################################################
*/

let boundaries        //array used to store all the boundaries
let begin             //variable to ensure that the user wants to start the game
let finish            //variable to ensure that the user reached the "E" to end the game
let flag1 = false     //this flag will indicate if the user hovered over "S" or not in order to properly start the game
let flag2 = true      //this flag will indicate if the user hovered over the boundaries to ensure that they can not win before restarting

/*
#################################################
                      Main
#################################################
*/

window.onload = () => {

    begin = document.getElementById("start")
    begin.onmouseover = touchStart                                 //this will enter the function touchStart when the player hovers over "S" to properly start the game
    finish = document.getElementById("end")
    finish.onmouseover = touchEnd                                  //this will enter the function touchEnd when the player hovers over "E" to properly end the game
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

    if(flag1){ //this will check if the user hovered over "S" first to ensure that the borders turn red ONLY AFTER the user decides to start the game

        flag2 = false //this now ensures that the user can not continue the game unless they restart

        for (let i = 0; i<boundaries.length - 1; i++){
            //boundaries[i].style.backgroundColor = "#ff8888"
            boundaries[i].className += " youlose" //This will override the original boundary color using the present youlose color in the CSS file
        }
    }
}

let touchStart = () => {

    flag1 = true //to ensure that the user started the game and only now will the borders turn red after hovering over "S"
}

let touchEnd = () => {

    if(flag1 && flag2){

        alert("you win") //alert is temporary & will be changed later
        flag1 = false
    }

}
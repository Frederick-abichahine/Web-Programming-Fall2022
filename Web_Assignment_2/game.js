
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
let statuss           //this will save the status in order to change it appropriately

/*
#################################################
                      Main
#################################################
*/

window.onload = () => {

    begin = document.getElementById("start")
    begin.onmouseover = touchStart                          //this will enter the function touchStart when the player hovers over "S" to properly start the game
    finish = document.getElementById("end")
    finish.onmouseover = touchEnd                           //this will enter the function touchEnd when the player hovers over "E" to properly end the game
    statuss = document.getElementById("status")
    boundaries = document.getElementsByClassName("boundary")

    for (let i = 0; i<boundaries.length - 1; i++){
        boundaries[i].onmouseover = touchBoundary           //this will ensure that the borders turn red if the player hovers over them
    }
}

/*
#################################################
                Other Functions
#################################################
*/

let touchBoundary = () => {                                 //this function will be executed when the user touches the boundaires after starting the game

    if(flag1){                                              //this will check if the user hovered over "S" first to ensure that the borders turn red ONLY AFTER the user decides to start the game

        flag2 = false                                       //this now ensures that the user can not continue the game unless they restart

        for (let i = 0; i<boundaries.length - 1; i++){
            //boundaries[i].style.backgroundColor = "#ff8888"
            boundaries[i].className += " youlose"           //This will override the original boundary color using the present youlose color in the CSS file
        }
        statuss.textContent = "You lost! :("                //\nClick \"S\" to restart
    }
}

let touchStart = () => {                                    //this function will be executed when the user decides to start the game by hovering over the "S" box on the screen

    if (flag2){                                             //to ensure that you cannot start the game again without clicking on "S" (NOT just hovering)
        statuss.textContent = "You started the game..."
        flag1 = true                                        //to ensure that the user started the game and only now will the borders turn red after hovering over "S"
    }
}

let touchEnd = () => {                                      //this function will be executed when the user reaches the "E" box on the screen, but checks if it is a true or false win using flags

    if(flag1 && flag2){                                     //if the user did not hover over S to start or hovered over the boundaries then they did not win; otherwise they did

        statuss.textContent = "You won! :D"
        flag1 = false                                       //to ensure that the boundaries do not turn red after winning, unless the game is restarted
    }

}

let clickStart = () => {
    
}
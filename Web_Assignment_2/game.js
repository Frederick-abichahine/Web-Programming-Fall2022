//Maze Game - Frederick Abi Chahine

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
let click             //this variable will be used to check if the user clicked on the "S" box to restart the game

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
    click = document.getElementById("start")
    click.onclick = clickStart                              //this will enter the function clickStart when the player decides to restart the game

    for (let i = 0; i<boundaries.length - 1; i++){
        boundaries[i].onmouseover = touchBoundary           //this will enter the function touchBoundary to ensure that the borders turn red if the player hovers over them
    }
}

/*
#################################################
                Other Functions
#################################################
*/

let touchStart = () => {                                    //this function will be executed when the user decides to start the game by hovering over the "S" box on the screen

    if (flag2){                                             //to ensure that you cannot start the game again without clicking on "S" (NOT just hovering)
        
        statuss.textContent = "You started the game..."
        flag1 = true                                        //to ensure that the user started the game and only now will the borders turn red after hovering over "S"
        test = true
    }
}

//-----------------------------------------------

let touchEnd = () => {                                      //this function will be executed when the user reaches the "E" box on the screen, but checks if it is a true or false win using flags

    if(flag1 && flag2){                                     //if the user did not hover over S to start or hovered over the boundaries then they did not win; otherwise they did

        statuss.textContent = "You won! :D"
        flag1 = false                                       //to ensure that the boundaries do not turn red after winning, unless the game is restarted
        flag2 = false                                       //to ensure that the player can not start again just by hovering over "S" (they must click it)
    }
}

//-----------------------------------------------

let touchBoundary = () => {                                 //this function will be executed when the user touches the boundaires after starting the game

    if(flag1){                                              //this will check if the user hovered over "S" first to ensure that the borders turn red ONLY AFTER the user decides to start the game

        flag2 = false                                       //this now ensures that the user can not continue the game unless they restart

        for (let i = 0; i<boundaries.length - 1; i++){      //we add -1 to the length to remove the boundary of the small box below
                                                            //boundaries[i].style.backgroundColor = "#ff8888"
            boundaries[i].className += " youlose"           //This will override the original boundary color using the present youlose color in the CSS file
        }
        statuss.textContent = "You lost! :("                //\nClick \"S\" to restart
    }
}

//-----------------------------------------------

let clickStart = () => {                                    //this function will be executed when the player wants to restart the game by clicking on the "S" box
    
    document.location.reload(true)                          //reloads the page to play again
}

//-----------------------------------------------

let playerCheating = () => {

    //display you lost if the mouse goes outside
}

//-----------------------------------------------

//keep track of score
//+5 for win
//-10 for lose
//add button to reset score to 0
//save score on local storage
//add login system

//-----------------------------------------------
//End
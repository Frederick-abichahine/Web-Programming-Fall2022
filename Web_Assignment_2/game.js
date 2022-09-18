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
let cheat             //this variable will make sure that the user does not cheat by going around the game after starting it
let flag3 = true      //this variable is just for display purposes; to correctly display if the player cheated or not
let username          //the player's username used to login and save their score
let password          //the user's password
let score             //score variable to keep track of the player's score
let object            //used to store object information
let reset             //used to create the reset score button

/*
#################################################
                      Main
#################################################
*/

window.onload = () => {

    reset = document.getElementsByClassName("boundary example")
    reset[0].innerHTML = "<span><strong>Reset Score</strong></span>"
    reset[0].onclick = resetScore                           //this will enter the function resetScore in order for the user to reset their score to 0
    object = document.getElementsByTagName("P")             //array that stores all the paragraphs from the HTML, in this case we have 2 paras => 2 elements, 0 and 1
    login()
    begin = document.getElementById("start")
    begin.onmouseover = touchStart                          //this will enter the function touchStart when the player hovers over "S" to properly start the game
    finish = document.getElementById("end")
    finish.onmouseover = touchEnd                           //this will enter the function touchEnd when the player hovers over "E" to properly end the game
    statuss = document.getElementById("status")
    boundaries = document.getElementsByClassName("boundary")
    click = document.getElementById("start")
    click.onclick = clickStart                              //this will enter the function clickStart when the player decides to restart the game
    cheat = document.getElementById("game")
    cheat.onmouseleave = playerCheating                     //this will enter the function playerCheating if the player decides to go outside the game border

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
    }
}

//-----------------------------------------------

let touchEnd = () => {                                      //this function will be executed when the user reaches the "E" box on the screen, but checks if it is a true or false win using flags

    if(flag1 && flag2){                                     //if the user did not hover over S to start or hovered over the boundaries then they did not win; otherwise they did

        statuss.textContent = "You won! :D"
        flag1 = false                                       //to ensure that the boundaries do not turn red after winning, unless the game is restarted
        flag2 = false                                       //to ensure that the player can not start again just by hovering over "S" (they must click it)
        let higher_score = JSON.parse(localStorage.getItem(username))
        higher_score.score += 5                             //increases the score by 5 points when the player wins
        localStorage.setItem(username, JSON.stringify(higher_score))
        displayScore()
    }
}

//-----------------------------------------------

let touchBoundary = () => {                                 //this function will be executed when the user touches the boundaires after starting the game

    if(flag1){                                              //this will check if the user hovered over "S" first to ensure that the borders turn red ONLY AFTER the user decides to start the game

        flag2 = false                                       //this now ensures that the user can not continue the game unless they restart
        flag1 = false                                       //this ensures that the user can not cheat after losing before restarting the game

        for (let i = 0; i<boundaries.length - 1; i++){      //we add -1 to the length to remove the boundary of the small box below
            boundaries[i].className += " youlose"           //This will override the original boundary color using the present youlose color in the CSS file
        }

        if(flag3){                                          //if the player did not cheat but touched the boundary, this loss message is displayed
            statuss.textContent = "You lost! :("            //\nClick \"S\" to restart
        }
        else{                                               //otherwise the player tried to cheat by going around and this message is displayed
            statuss.textContent = "You cheated! Loser..."
        }
        let lower_score = JSON.parse(localStorage.getItem(username))
        lower_score.score -= 10                             //decreases the score by 10 points when the player loses or cheats
        localStorage.setItem(username, JSON.stringify(lower_score))
        displayScore()
    }
}

//-----------------------------------------------

let clickStart = () => {                                    //this function will be executed when the player wants to restart the game by clicking on the "S" box
    
    //document.location.reload(true)                        //reloads the page to play again
    for (let i = 0; i<boundaries.length - 1; i++){          //we add -1 to the length to remove the boundary of the small box below
        boundaries[i].className = "boundary"                //This will override and replace the youlose boundary color using the original boundary color in the CSS file
    }

    flag2 = true                                            //resetting the flag variables
    flag3 = true
    touchStart()                                            //since user is already on "S" the game should start again immediately after clicking "S"
}

//-----------------------------------------------

let playerCheating = () => {                                //this function will be executed when the player tries to cheat by going around after starting the game

    flag3 = false                                           //to correctly display that the player cheated on the screen
    touchBoundary()                                         //similar effect to the loss outcome
}

//-----------------------------------------------

let login = () => {                                         //this function pops up user login information everytime the site is launched or refreshed

    username = prompt("Enter Username: ");
    const checker = checkUsername()                         //calls the function to check if the username exists or not

    if(checker != null){                                    //if the username exists then this executes
        password = String(prompt("Enter Password: "));

        while(String(checker.pass) != password){            //ensures that the correct password is entered
            password = String(prompt("Enter Password: "));
        }
        object[1].textContent = "Good luck. Your Score is: " + checker.score 
    }
    else{                                                   //else the name does not exist so a new account is being created
        password = prompt("Enter Password: ");
        const object2 = {name: username, pass: password, score: 0};
        localStorage.setItem(username, JSON.stringify(object2));
        object[1].textContent = "Good luck. Your Score is: " + object2.score
    } 
}

//-----------------------------------------------

let checkUsername = () => {                                 //this function checks if the username input exists or returns null

    const checker = JSON.parse(localStorage.getItem(username)); 
    return checker
}

//-----------------------------------------------

let displayScore = () => {                                  //this function simply displays the current score of the player

    score = JSON.parse(localStorage.getItem(username))
    object[1].textContent = "Good luck. Your Score is: " + score.score
}

//-----------------------------------------------

let resetScore = () => {                                    //this function will allow the player to reset their score to 0

    let reset_score = JSON.parse(localStorage.getItem(username))
    reset_score.score = 0
    localStorage.setItem(username, JSON.stringify(reset_score))
    displayScore()
    for (let i = 0; i<boundaries.length - 1; i++){          //we add -1 to the length to remove the boundary of the small box below
        boundaries[i].className = "boundary"                //This will override and replace the youlose boundary color using the original boundary color in the CSS file
    }

    flag2 = true                                            //resetting the flag variables and status
    flag3 = true
    statuss.textContent = "Begin by moving your mouse over the \"S\"."
}

//-----------------------------------------------
//End

/*
Notes:
To access local storage: right click, inspect, >> (next to memory), application, local storage, file

Two types of local storage:
    - window local storage: will keep data even after reseting the page / closing the browser (we will be using this here)
    - session local storage: will remove the data after the session ends 
*/
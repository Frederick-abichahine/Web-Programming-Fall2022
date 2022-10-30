//don't use querySelector when we retrieve by ID because the time complexity getElementById is less and hence faster than the 
//querySelector
//when we retrieve elements by Classes we use the querySelector because it is faster than getElementsByClassName

//TESTING:
// const boundary = document.getElementById("boundary1");
// boundary.classList.add("youlose"); //returns a list with all the current classes of the element and appends to the existing classes a new class "youlose"
// const boundaries = document.querySelectorAll("#game div.boundary"); //querySelector will retrieve the first occurence 
// //querySelectorAll will retrieve all elements
// //#game div.boundary selects all the boundary elements inside game so it's like the -1 in the for loop 

// boundaries.forEach(b => b.classList.add("youlose"));

window.onload = () =>{
    const cheat = document.getElementById("game");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const boundaries = document.querySelectorAll("#game div.boundary"); 
    const status = document.getElementById("status");
    let score = 0; //declared as let not const because the value of score will change
    let is_playing = 0; //used to determine if the game has started or not
    //0 is false/ everything else is true

    const failHandler = (e) => { //if we don't put const it will consider it as var
        if(is_playing){
            is_playing = 0;
            boundaries.forEach(b => b.classList.add("youlose"));
            score -= 10;
            status.innerText = `You failed! Score: ${score}`;
        }
    }

    const resetHandler = (e) => { //e is only put if we want to catch the event
        score = 0;
        startHandler(e);
    }

    const startHandler = (e) => { //e is only put if we want to catch the event
        is_playing = 1;
        boundaries.forEach(b => b.classList.remove("youlose"));
        boundaries.forEach(b => b.addEventListener("mouseover", failHandler));
        status.innerText = "ENJOY THE GAME";
    }

    const endHandler = (e) => { //e is only put if we want to catch the event
        if(is_playing){
            is_playing = 0;
            score += 5;
            //status.innerText = "You won! Score: " + score;
            status.innerText = `You won! Score: ${score}`; //new way to concatenate string and numeric value
            //pay attention to ``, we cannot use "" or '' since that will take it literally but `` will execute what is inside with $
        }
    }
    
    start.addEventListener("click", resetHandler);
    start.addEventListener("mouseover", startHandler); //if we put startHandler() it will call the function without the eventListener so when we refresh the page it will be executed immediately
    //in this case the method startHandler will only be called only when the mouse is over the start  
    end.addEventListener("mouseover", endHandler);
    cheat.addEventListener("mouseleave", failHandler);
    failHandler(null);
}
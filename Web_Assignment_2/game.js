
let bound

window.onload = () => {
    bound = document.getElementsByClassName("boundary")
    for (let i = 0; i<bound.length; i++){
        bound[i].onmouseover = touchBoundary()
    }
}

let touchBoundary = () => {
    for (let i = 0; i<bound.length; i++){
        bound[i].style.color = "red"
    }
}
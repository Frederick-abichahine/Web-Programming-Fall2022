const lab_pages = {} //we can append to the const since we are not changing the object reference, only adding values
//all functions would be appended to this object lab_pages

lab_pages.Console = (title, values, one_value = true) => { //one_value is checking if the value passed is one variable or an array, if one value leave it as default true, if more than one value then we pass false to overwrite the true into false and perform the task for an array instead
    //the dot in lab_pages.Console is appending the function Console to the object lab_pages
    //this creates our own Console

    console.log('---' + title + '---')
    if(!(Array.isArray(values))){ //if(one_value){}
        console.log(values)
    }
    else{
        for(let i = 0; i<values.length; i++){
            console.log(values[i])
        }
    }
    console.log('---' + title + '---')
}

const x = 0
const L = [3,4,5,1]
lab_pages.Console("Testing my code", x) //no need to specify true since it is by default true for one values
lab_pages.Console("Testing my code", L, false) //we need to specift false since it is not one value, it is an array
//we pass false if we are using the one_value parameter, but in my case I am using Array.isArray(values) to check if my variable is an array or not without the need to manually pass a boolean

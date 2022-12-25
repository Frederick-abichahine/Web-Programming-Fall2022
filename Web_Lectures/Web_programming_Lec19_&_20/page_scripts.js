const workshop_pages = {} //we can append to the const since we are not changing the object reference, only adding values

const base_url = "http://localhost/mobile/" //this is the main URL that I am talking to, fix mobile to my path

workshop_pages.Console = (title, values, one_value = true) => { //one_value is checking if the value passed is one variable or an array, if one value leave it as default true, if more than one value then we pass false to overwrite the true into false and perform the task for an array instead
    console.log('---' + title + '---')
    if(!(Array.isArray(values))){
        console.log(values)
    }
    else{
        for(let i = 0; i<values.length; i++){
            console.log(values[i])
        }
    }
    console.log('--/' + title + '---')
}

//const x = 0
//const L = [3,4,5,1]
//lab_pages.Console("Testing my code", x) //no need to specify true since it is by default true for one values
//lab_pages.Console("Testing my code", L, false) //we need to specift false since it is not one value, it is an array

workshop_pages.loadFor = (page) => { //this is an arrow function, that takes pages as a parameter. it is a string parameter
    eval("workshop_pages.load_" + page + "();") //eval takes the name of the function and executes it
}

workshop_pages.load_landing = async () => {
    // workshop_pages.landing = {} //this is an object
    // workshop_pages.landing.mergeSort = () => { //this is creating mergesort for workshop_pages.landing object

    // }
    // alert("Hi from JS")

    const articles_url = base_url + "get_articles.php"
    const response = await workshop_pages.getAPI(articles_url) //await means we have to wait until the response is there and then we store it in response
    //console.log(response.data[0].name) //since response is an object we can put .data
    const data = response.data
    const articles = document.getElementById("my_articles")
    for(let i; i<data.length; i++){ //to display all articles in database
        articles.innerHTML += "<li>" + data[i].name + " - " + data[i].author + "</li>"
    }
    const title = document.getElementById("title")
    title.innerText = "Article 1: " + data[0].name 


    const btn = document.getElementById("article_btn")
    btn.addEventListener("click", async function(){
        const id = article_id.values
        
    })
}

workshop_pages.load_profile = () => {
    alert("Hi from PROFILE JS")
}

workshop_pages.getAPI = async (api_url) => { //this function will return a promise... when we write await we MUST write async
    //this is an async function, it wont move in a sequential way like normal JS
    //so what happens is that it will reach the await then continue normally without waiting for the await, then when all the code is done it will return back to axios that has await so we wont waste time
    try{
        return await axios(api_url) //axios is a third party library that helps us connect to the backend
        //await helps us wait for the result

    }catch(error){
        workshop_pages.Console("Error from linking (GET)", error)
    }
}

workshop_pages.postAPI = async (api_url, api_data, api_token = null) => {
    //api_token, some APIs are authenticated so i cannot access them unless I am logged in so i need to pass a token to show that I am logged in
    try{
        return await axios.post( 
            api_url,  //we need the url to be able to post
            api_data, //data is a JSON object that we send to the server
            {
                headers:{ //JSON object, this will let the backend know if the user is authenticated, if the user is logged in or not
                    'Authorization' : "token" + api_token
                }
            }
        )
    }catch(error){
        workshop_pages.Console("Error from linking (POST)", error)
    }
}

//workshop_pages.load_landing() //we NO LONGER have to call the function in JS since we are calling it in the specific html for the function needed
//if we did not call it in the html nor in the js then the function will never be executed

// ################
//      NOTES:
// ################

//what is happening here is that the html is calling the function loadFor and passing a string as an index, this string will be part of a function name so when we evalute the concatenated string in loadFor it will execute the function with that name
//this is beneficial because in different pages with different htmls etc... we can call diferent functions in a much cleaner way without having to call all function in JS
//EX: we have two html files connected to the same JS file but each html file is passing a differnt string as a parameter hence executing a specific function or set of functions in JS, which is aloooooooot better than creating different JS files for every html code

//if a function is shared for more than one page then we declare the function outside BUT if a function is specific to a certain page only then we declare the function inside the function for that page only

//what is the difference between fetch and axios?
//axios uses fetch but it is built on top of fetch, it is a third party library
//fetch is a built in function in JS
//in fetch we work with promises, we write extra code here...

//##########
//the return type of await is a promise.
//we have three states of promises
//1) pending - when we are waiting for the API it is pending, the return type of await is pending promise, still dont have an answer yet
//2) fullfilled - the operation has been successfully completed, retuns a JSON object
//3) rejected - API retuns an error

//.value ensures that we only get the value of the HTML element rather than the HTML element literally
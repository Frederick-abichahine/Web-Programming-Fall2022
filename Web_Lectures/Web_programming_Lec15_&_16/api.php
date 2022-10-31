<?php

// #################################
//        GET Way 1 (Hardcode)
// #################################

$email = "John@gmail.com";
$name = "Mr. John";

$choice_gender = rand(0,1); //inclusive

if($choice_gender == 0){
    $gender = "male";
}else{
    $gender = "female";
}

$results = [
    "name" => $name,
    "gender" => $gender
];

echo json_encode($results); //since the results is an array, for it to be an API it should return an object of type JSON

//even though it is not connected to a database, it is still an API
//this is a GET API since we are testing it on google to see the output


// #########################
//       GET Way 2 (URL)
// #########################

//we have to pass values in the url by adding this: ?email=test@email.com&name=joyz

$email = $_GET["email"];
$name = $_GET["name"];

$choice_gender = rand(0,1);

if($choice_gender == 0){
    $gender = "male";
}else{
    $gender = "female";
}

$results = [
    "name" => $name,
    "gender" => $gender
];

echo json_encode($results);

// ##################
//        POST
// ##################

//now we will modify the code to make it a POST API code

$email = $_POST["email"]; //instead of writing a hardcode email, we specify the key for the post
//$_POST is an array that is going to take all the values sent to this API through the body of the post (from postman)
//the key on postman should match the value in php inside $_POST

$name = $_POST["name"];

$choice_gender = rand(0,1);

if($choice_gender == 0){
    $gender = "male";
}else{
    $gender = "female";
}

$results = [
    "name" => $name,
    "gender" => $gender
];

echo json_encode($results); 

//When do we choose if GET or POST -> based on the sensitivity of the parameters
//Not logical to use GET when you have many parameters (>3) and these values are large OR if the values are sensitive like a password

//Lets say we are building an SPA and we have several items, in order to retrive this data we will use GET since this is a GET API without any parameters, it is getting all
//We use GET when we are retrieving info from the database & the data is not sensitive

//if we favorite / like a picture on insta, it is GET since we are only sending the ID of the picture that we liked
//we get a response -> true or false...


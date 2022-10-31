<?php
#we want to be able to have the CRUD system
#this API should be able to create, read, update, or delete on the database.

include("connection.php");

if (isset($_POST["name"] && $_POST["name"] != "" && $_POST["author"] && $_POST["author"] != "" && $_POST["location"] && $_POST["location"] != "")){
    $name = $_POST["name"]; #$_POST[] is an array, it is a dictionary with a key "name", and we save the value at that key inside $name
    $author = $_POST["author"];
    $location = $_POST["location"]

    # a good programmer would do them seperately for every variale to ensure that the exact error is displayed on the screen, like missing name, missing location etc...

}
else{
    $response = [];
    $response["success"] = false;
    echo json_encode($response);
    return; #this will stop the whole code, so it wont continue with the query, since the API is an object
}

#we can referecne $mysqli variable since we included connection.php
#mysqli stands for my sql improved
#why do we use this? because before this to hack people used to "inject" a query in the input field such as enter email section on facebook that used to send the query to the database instead of user information and the user could tamper with the database, like getting sensitive information or even deleting all information
#this is known as sql injection since we are injecting a query into the input field to destroy the database or hack information

$query = $mysqli -> prepare("INSERT INTO articles(name, author, location) VALUES(?, ?, ?)"); # ? are placeholders
$query -> bind_param("sss", $name, $author, $location) #we use sss (string string string), to take the three values as string, we can put i for int etc...
$query -> execute();

# we can use postman to test our API, the following is just a flag to display on the screen for the frontend to see without having to go to the backend to see if it worked or not

$response = [];
$response["success"] = true;

echo json_encode($response);



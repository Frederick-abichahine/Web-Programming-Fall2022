<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST')
header('Access-Control-Allow-Headers: X-Requested-With');
# the above three are to avoid the CORS error

include("connection.php");

#### added after below: this is if we want to only get the id of the article

#this is only if we want to get one article with this specific id

if(isset($_GET["id"])){ #so here we put the id in the URL to get the article with that specific id
    $id = $_GET["id"];
}else{ #if you did not put the id, or the id does not exit the folloing message will be displayed and the program terminate, die is like a print statement then return.
    die("Don't try to mess around bro ;)");
}

####

$query = $mysqli->prepare("SELECT * from articles");
$query->execute(); #we do not need to bind_param like in add_article since there are no placeholders to insert into the db

$query = $mysqli->prepare("SELECT * FROM articles WHERE id=?");
$query -> bind_param("i", $id); #here we have to bind param since we are taking the id as input in the URL from the user to get that specific article with that id
$query->execute();

$array = $query->get_result();
$response = [];

while($article = $array->fetch_assoc()){ #fetch assoc means we are fetching key values from the data base, so it will return the key (column name) of the column and the value and store it inside article (key value pair)
    //we keep looping as long as there are articles not fetched
    $response[] = $article; #so response 
}

echo json_encode($response); #json_encode always takes an array as input


#since this is a get API, we can indeed test it on google chrome unlike post API, for get we can use postman or google chrome
#for post api we can only use postman since we can not edt url on chrome for post api

#once a URL returns a webpage => it is not longer an API
#Here, yes we are using chrome to see the JSON object here but just because it is on chrome doesnt mean it is a webpage, here we are just seeing the json object => it is an api in this case

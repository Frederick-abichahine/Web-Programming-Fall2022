<?php

//php can NOT run outside the server... it wont be compiled or executed
//in order to run my file I need to put it inside a server (in our case htdocs which is our local / fake server)
//we write localhost/name_of_folder/name_of_file.php

echo "Hello World!";

//all varibales should be decalred using the $ sign

$x = 10;
echo $x;

if($x < 5){
    echo "Smaller";
} else{
    echo "larger";
}

for($i = 0; $i<10; $i++){
    echo $i . "<br>"; //in php . is the concatenation operator, not + like python
}

function fct($str){
    echo "Your string is " . $str
    return true;
}

fct("hello")

?>
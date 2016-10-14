<?php

bool validUser = false;
// username and password sent from form 
$myusername=$_POST['username']; 
$mypassword=$_POST['password']; 

// XML handling here
$xml=simplexml_load_file("users.xml") or die("Error: File does not exist");
foreach($xml->user as $user){
	if($user->username == $myusername && $user->password == $mypassword){
		validUser = true;
	}
}

// Register $myusername, $mypassword and redirect to file "index"
if(validUser){
	session_register("myusername");
	session_register("mypassword"); 
	header("location:index.php");
}
else {
	echo "Wrong Username or Password";
}
?>
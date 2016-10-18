<?php
session_start();

$validUser = false;
// username and password sent from form 
$myusername=$_POST['username']; 
$mypassword=$_POST['password']; 

// XML handling here	
$xml=simplexml_load_file("users.xml") or die("Error: File does not exist");
foreach($xml->user as $user){
	if($user->username == $myusername && $user->password == $mypassword){
		$validUser = true;
	}
}

// Register $myusername, $mypassword and redirect to file "index"
if($validUser){
	if(isset($_SESSION['invalidlogin'])){
		unset($_SESSION['invalidlogin']);
	}
	$_SESSION['username']=$myusername;
	header("location:index.php");
}
else {
	$_SESSION['invalidlogin']=1;
	header("location:login.php");
}
?>
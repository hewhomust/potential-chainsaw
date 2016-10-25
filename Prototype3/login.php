<?php
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Union</title>
    <link href="style.css" rel="stylesheet">
    <link rel="icon" href="img/Union.png">
    <link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans:300,400" rel="stylesheet">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

  </head>
  <body>
    <div id="header" class="container headerBar">
      <a href="index.php">
        <img id="headerImage" src="img/Union.png"/>
        <h1>Union</h1>
      </a>
      <p><a class="logInOrOut" href="index.php">Home</a></p>
    </div>
	  <div id="articleContainer" class="container">
      <div id="mainArticle" class="article standardBox">
        <h1 id="loginTitle" class="articleHeading" >Login</h1>
        <a class="matrixIcon" onclick="showMatrix()">≡</a>
        <p id="mainArticleText" class="articleText"></p>
        <form id="loginForm" method="post" action="checklogin.php">
          <p>Username</p>
          <input id="username" type="text" name="username"/>
          <p>Password</p>
          <input id="password" type="password" name="password"/>
		  <?php

		  session_start();
		  if(isset($_SESSION['invalidlogin'])){
			echo '<p>Username or Password is incorrect</p><br>';
			unset($_SESSION['invalidlogin']);
		  }

		  ?>
          <p></p>
          <input id="loginButton" type="submit" value="Log In"/>
          <p class="smallerText">Or sign up</p>
          <a href="index.php" class="smallerText">Or browse anonymously</a>
        </form>
      </div>
    </div>
  </body>
</html>

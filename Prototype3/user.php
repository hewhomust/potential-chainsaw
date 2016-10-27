<?php
session_start();
?>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Union</title>
    <link href="style.css" rel="stylesheet">
    <link rel="icon" href="img/Union.png">
    <link href="https://fonts.googleapis.com/css?family=Lora|Open+Sans:300,400" rel="stylesheet">
	  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="script.js" type="text/javascript"></script>
  </head>
  <body>
	<?php
		if(isset($_SESSION['username'])){
			echo "<script> startUser('".$_SESSION['username']."'); </script>";
		}
	?>
    <div id="header" class="container headerBar">
      <a href="index.php">
        <img id="headerImage" src="img/Union.png"/>
        <h1>Union</h1>
      </a>
      <p><a class="logInOrOut" href="index.php">Home</a></p>
    </div>
	  <div id="articleContainer" class="container">
      <div id="userContainer" class="article standardBox">
        <!--<h1 id="loginTitle" class="articleHeading" >User</h1>
        <a class="matrixIcon" onclick="showMatrix()">≡</a>
        <p id="mainArticleText" class="articleText"></p>-->
        <div id="userInfo">
          <p>Your page</p>
          <p class="smallerText"></p>
        </div>

        <div id="userMatrixContainer">
          <table>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            </tr>
          </table>
        </div>


      </div>
    </div>
  </body>
</html>

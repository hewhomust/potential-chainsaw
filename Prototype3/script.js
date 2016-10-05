$(document).ready(function(){
    $(".article").click(function(){
  		var newH = $(this).children("h1").text();
  		var newP = $(this).children("p").text();
  		var oldH = $("#mainArticle").children("h1").text();
  		var oldP = $("#mainArticle").children("p").text();
      $(this).children("h1").text(oldH);
  		$(this).children("p").text(oldP);
  		$("#mainArticle").children("h1").text(newH);
  		$("#mainArticle").children("p").text(newP);
    });
    /*
    $("#discussionHeader").click(function(){
		    $(".discussion").toggle();
    });
    */
    /*
    $(".discussion").click(function(){
        $(".discussion").children().toggle();
    });
    */
});

function startTime() {
    var today = new Date();
    var hoursToGo = addZero(24 - today.getHours());
    var minutesToGo = addZero(60 - today.getMinutes());
    var secondsToGo = addZero(60 - today.getSeconds());

    document.getElementById('clock').innerHTML = hoursToGo + ":" + minutesToGo
     + ":" + secondsToGo + " remaining";
    var timeOut = setTimeout(startTime, 1000);
}

function addZero(n){
  if(n < 10){
    n = "0" + n;
  }
    return n;
}

function upvote(upvoter, number){
  console.log($(upvoter).siblings().next());
  var score = $(upvoter).siblings().first().text();
  var newScore = +score + +number;
  $(upvoter).siblings().first().text(newScore);
}

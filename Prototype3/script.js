function startUser(user){
  startTime();
  showMatrix();
  loadUser(user);
}

function start(){
  startTime();
  showMatrix();
  loadArticles();
}

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
});

function loadArticles() {
	var articleDoc = new XMLHttpRequest();
	articleDoc.onreadystatechange = function(){
		if(articleDoc.readyState == 4 && articleDoc.status == 200){
			loadArticlesXML(articleDoc);
		}
	};
	articleDoc.open("GET", "articles.xml", true);
	articleDoc.send();
}

function findArticleOffset(){
	var clock = $('#clock');
	if(clock.hasClass("clockStarted")){
			return 0;
	}else if(clock.hasClass("clockFinished")){
			return 3;
	}else if(clock.hasClass("clockStarting")){
			return 6;
	}
}

function loadArticlesXML(doc){
	var articleOffset = findArticleOffset();
	var xmlArticles = doc.responseXML;
	var xmlArticle = xmlArticles.getElementsByTagName('article');
	var title = xmlArticle[0 + articleOffset].getElementsByTagName('title')[0].childNodes[0].nodeValue;
	var article = xmlArticle[0 + articleOffset].getElementsByTagName('text')[0].childNodes[0].nodeValue;
	document.getElementById("mainArticleTitle").innerHTML = title;
	document.getElementById("mainArticleText").innerHTML = article;
	var title = xmlArticle[1 + articleOffset].getElementsByTagName('title')[0].childNodes[0].nodeValue;
	var article = xmlArticle[1 + articleOffset].getElementsByTagName('text')[0].childNodes[0].nodeValue;
	document.getElementById("sub1ArticleTitle").innerHTML = title;
	document.getElementById("sub1ArticleText").innerHTML = article;
	var title = xmlArticle[2 + articleOffset].getElementsByTagName('title')[0].childNodes[0].nodeValue;
	var article = xmlArticle[2 + articleOffset].getElementsByTagName('text')[0].childNodes[0].nodeValue;
	document.getElementById("sub2ArticleTitle").innerHTML = title;
	document.getElementById("sub2ArticleText").innerHTML = article;
}

function hideChildren(sibling){
  if($(sibling).siblings().length > 4){
    //$(sibling).siblings().last().toggle();
    $(sibling).siblings().last().toggleClass('toggled');
    $(sibling).parent().toggleClass('toggled');
  }
}

function startTime() {
    var today = new Date();
    var hoursToGo = addZero(24 - today.getHours());
    var minutesToGo = addZero(60 - today.getMinutes());
    var secondsToGo = addZero(60 - today.getSeconds());

    var clock = $('#clock');
    if(clock.hasClass("clockStarted")){
      document.getElementById('clock').innerHTML = hoursToGo + ":" + minutesToGo
      + ":" + secondsToGo + " remaining";
      var timeOut = setTimeout(startTime, 1000);
    }else if(clock.hasClass("clockFinished")){
      document.getElementById('clock').innerHTML = "This discussion is now closed";
    }else if(clock.hasClass("clockStarting")){
      document.getElementById('clock').innerHTML = hoursToGo + ":" + minutesToGo
      + ":" + secondsToGo + " untill discussion is opened.";
      var timeOut = setTimeout(startTime, 1000);
    }

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

function showMatrix(){
  $('#matrixContainer').toggle();
  $('.matrixIcon').toggleClass('clicked');
}

function reply(comment){
  console.log($("comment:nth-child(3)"));
  var commentUser = "bob";
  var siblings = $(comment).siblings();
  console.log(siblings);
  var commentUser = siblings[3].children[0].innerHTML;
  $('#commentInput').val("@" + commentUser + " ");
}

// matrix things
var rows = [];
var columns = [];

function choose(cell, row, column){
	cell.classList.add('chosen');
	rows.push(row);
	columns.push(column);
	console.log('!!!Recieved a click!!!');
	console.log('Rows: ' + rows + '    Columns: ' + columns);
	var averageRow = calculateAverageRow();
	var averageCol = calculateAverageCol();
	highlightAverageCell(averageRow, averageCol);
}

function calculateAverageRow(){
	var rowSum = 0;
	for(i=0;i<rows.length;i++){
		rowSum += rows[i];
	}
	var rowsAve = Math.round(rowSum/rows.length);
	console.log('rowsAve: ' + rowsAve);
	return rowsAve;
}

function calculateAverageCol(){
	var colSum = 0;
	for(i=0;i<columns.length;i++){
		colSum += columns[i];
	}
	var colAve = Math.round(colSum/columns.length);
	console.log('colAve: ' + colAve);
	return colAve;
}

function highlightAverageCell(averageRow, averageCol){
	removeAverage();
	var tr = document.getElementsByTagName('tr')[averageRow];
	var td = tr.getElementsByTagName('td')[averageCol];
	td.classList.add('average');
}

function removeAverage(){
	var tds = document.getElementsByTagName('td');
	for(i=0; i<tds.length; i++){
		tds[i].classList.remove('average');
	}
}

function loadUser(user){
	var userDoc = new XMLHttpRequest();
	userDoc.onreadystatechange = function(){
		if(userDoc.readyState == 4 && userDoc.status == 200){
			loadUserXML(userDoc, user);
		}
	};
	userDoc.open("GET", "users.xml", true);
	userDoc.send();
}

function loadUserXML(doc, user){
	var xmlUsers = doc.responseXML;
	var xmlUser = xmlUsers.getElementsByTagName('user');
	for(var i=0; i < xmlUser.length; i++){
		if(xmlUser[i].getElementsByTagName('username')[0].childNodes[0].nodeValue == user){
			for(var j=0; j < xmlUser[i].getElementsByTagName('vote').length; j++) {
			
				var xval = parseInt(xmlUser[i].getElementsByTagName('vote')[j].getElementsByTagName('xval')[0].childNodes[0].nodeValue);
				var yval = parseInt(xmlUser[i].getElementsByTagName('vote')[j].getElementsByTagName('yval')[0].childNodes[0].nodeValue);
				choose(document.getElementById('userMatrixContainer'), xval, yval);

				document.getElementById('userMatrixContainer').getElementsByTagName('table')[0].getElementsByTagName('tr')[xval].getElementsByTagName('td')[yval].classList.add('chosen');
			}
		}
	}
}


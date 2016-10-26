function start(){
  startTime();
  showMatrix();
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
	console.log('!!!Recieved a click!!!')
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

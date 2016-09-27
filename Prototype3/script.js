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
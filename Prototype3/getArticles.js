$(document).ready(function(){
	var articleDoc = new XMLHttpRequest();
	articleDoc.onreadystatechange = function(){
		if(articleDoc.readyState == 4 && articleDoc.status == 200){
			loadArticlesXML(articleDoc);
		}
	};
	articleDoc.open("GET", "articles.xml", true);
	articleDoc.send();
		
	function loadArticlesXML(doc){
		var xmlArticles = doc.responseXML;
		var xmlArticle = xmlArticles.getElementsByTagName('article');
		var title = xmlArticle[0].getElementsByTagName('title')[0].childNodes[0].nodeValue;
		var article = xmlArticle[0].getElementsByTagName('text')[0].childNodes[0].nodeValue;
		document.getElementById("mainArticleTitle").innerHTML = title;
		document.getElementById("mainArticleText").innerHTML = article;
	}
});
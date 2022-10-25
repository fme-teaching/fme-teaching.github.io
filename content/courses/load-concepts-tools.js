var text_concepts = ""
concepts.forEach(function (item) {
	    text_concepts = text_concepts + "<div class=\"checkbox\"><label><input type=\"checkbox\" value=\"" + item + "\"><span>" + item + "</span></label></div>";
});
document.getElementById("course_concepts_criteria").innerHTML += text_concepts;

var text_tools = ""
tools.forEach(function (item) {
	    text_tools = text_tools + "<div class=\"checkbox\"><label><input type=\"checkbox\" value=\"" + item + "\"><span>" + item + "</span></label></div>";
});
document.getElementById("course_tools_criteria").innerHTML += text_tools;

var text_countries = ""
countries.forEach(function (item) {
	    text_countries = text_countries + "<div class=\"checkbox\"><label><input type=\"checkbox\" value=\"" + item + "\"><span>" + item + "</span></label></div>";
});
document.getElementById("course_countries_criteria").innerHTML += text_countries;


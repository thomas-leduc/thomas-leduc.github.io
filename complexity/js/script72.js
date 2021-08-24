function listClusterImages(cookies, complexityLevel) {
    tmp = "";
    for (var i = 0; i < cookies[complexityLevel].length; i++) {
	cityId = cookies[complexityLevel][i];
	tmp += `  <li class="ui-state-default">${cityId}. ${cities[cityId]["name"]} <img src="thumbnails/${cityId}a.jpg" width="300px" value="${cityId}" /></li>\n`;
    }
    return tmp;
}

function submit72() {
    var complexities = { 'low': [], 'medium': [], 'high': [] };
    $("#sortable1").find("img").filter(function() {
	complexities.low.push( Number($(this).attr("value")) );
    });
    $("#sortable2").find("img").filter(function() {
	complexities.medium.push( Number($(this).attr("value")) );
    });
    $("#sortable3").find("img").filter(function() {
	complexities.high.push( Number($(this).attr("value")) );
    });

    document.cookie = `date2=${new Date(Date.now())}; SameSite=Strict`;
    document.cookie = `lowComplexity=[${complexities.low}]; SameSite=Strict`;
    document.cookie = `mediumComplexity=[${complexities.medium}]; SameSite=Strict`;
    document.cookie = `highComplexity=[${complexities.high}]; SameSite=Strict`;

    //~ $("#sortable1").find("img").filter(function() { console.log('===', $(this).attr("value")); });
    //~ console.log("***", document.cookie); //~ DEBUG

    //~ var cookies = parseCookies();
    //~ var finalResult = surveyContent(cookies);
    //~ alert(finalResult); //~ DEBUG
    window.location.href = "index73.html";
}

$(document).ready(function() {
    $("#tabs").tabs();
    
    $( "#sortable1" ).sortable();
    $( "#sortable1" ).disableSelection();
    $( "#sortable2" ).sortable();
    $( "#sortable2" ).disableSelection();
    $( "#sortable3" ).sortable();
    $( "#sortable3" ).disableSelection();
});

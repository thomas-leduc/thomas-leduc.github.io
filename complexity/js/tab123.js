function listClusterImages( complexities, complexityLevel ) {
    tmp = "";
    for (var i = 0; i < complexities[complexityLevel].length; i++) {
	cityId = complexities[complexityLevel][i];
	tmp += `  <li class="ui-state-default">${cityId}. ${cities[cityId]} <img src="thumbnails/${cityId}a.jpg" width="300px" value="${cityId}" /></li>\n`;
    }
    return tmp;
}

function submit2() {
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

    //~ $("#sortable1").find("img").filter(function() { console.log('===', $(this).attr("value")); });
    
    console.log("***", complexities.low); //~ DEBUG
    console.log("***", complexities.medium); //~ DEBUG
    console.log("***", complexities.high); //~ DEBUG
    
    // DELETE COOKIES
    document.cookie = "lowComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "mediumComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "highComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
    //~ console.log("***", document.cookie); //~ DEBUG
    alert(`
low = ${complexities.low}\n
medium = ${complexities.medium}\n
high = ${complexities.high}\n
`);
    //~ window.location.href = "index4.html";
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

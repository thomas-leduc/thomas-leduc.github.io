function listClusterImages( complexities, complexityLevel ) {
    tmp = "";
    for (var i = 0; i < complexities[complexityLevel].length; i++) {
	cityId = complexities[complexityLevel][i];
	tmp += `  <li class="ui-state-default">${cityId}. ${cities[cityId]} <img src="thumbnails/${cityId}a.jpg" width="300px" value="${cityId}" /></li>\n`;
    }
    return tmp;
}

function submit2() {
    var cookies = parseCookies();
    var date2 = new Date(Date.now());
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
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "city=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "gender=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "skills=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date0=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";

    document.cookie = "lowComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "mediumComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "highComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
    finalResult = `
uid = ${cookies.uid}
fname = ${cookies.fname}
lname = ${cookies.lname}
city = ${cookies.city}
gender = ${cookies.gender}
age = ${cookies.age}
skills = ${cookies.skills}
date0 = ${cookies.date0}
date1 = ${cookies.date1}
date2 = ${date2}
low = ${complexities.low}
medium = ${complexities.medium}
high = ${complexities.high}
`;

    //~ console.log("***", document.cookie); //~ DEBUG
    alert(finalResult);
    //~ window.location.href = "index53.html";
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

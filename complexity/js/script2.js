function listClusterImages(cookies, complexityLevel) {
    tmp = "";
    for (var i = 0; i < cookies[complexityLevel].length; i++) {
	cityId = cookies[complexityLevel][i];
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

    document.cookie = `date2=${new Date(Date.now())}; SameSite=Strict`;
    document.cookie = `lowComplexity=[${complexities.low}]; SameSite=Strict`;
    document.cookie = `mediumComplexity=[${complexities.medium}]; SameSite=Strict`;
    document.cookie = `highComplexity=[${complexities.high}]; SameSite=Strict`;

    //~ $("#sortable1").find("img").filter(function() { console.log('===', $(this).attr("value")); });
    console.log("***", document.cookie); //~ DEBUG

    var cookies = parseCookies();
    var finalResult = surveyContent(cookies);
    
    if ('Blob' in window) {
	//~ var fileName = prompt('Please enter file name to save', 'Untitled.txt');
	var fileName = `complexity-${cookies.uid}.txt`;
	var textFileAsBlob = new Blob([finalResult], { type: 'text/plain' });
	if ('msSaveOrOpenBlob' in navigator) {
	    navigator.msSaveOrOpenBlob(textFileAsBlob, fileName);
	} else {
            var downloadLink = document.createElement('a');
            downloadLink.download = fileName;
            downloadLink.innerHTML = 'Download File';
            
            if ('webkitURL' in window) {
		// Chrome allows the link to be clicked without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
            } else {
		// Firefox requires the link to be added to the DOM before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.click(function(){
		    document.body.removeChild(event.target);
		}); 
		
		downloadLink.style.display = 'none';
		document.body.appendChild(downloadLink);
            }
            downloadLink.click();
	}
    } else {
	alert('Your browser does not support the HTML5 Blob.');
    }
    //~ alert(finalResult); //~ DEBUG
    window.location.href = "index53.html";
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

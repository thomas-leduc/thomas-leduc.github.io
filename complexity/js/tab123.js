function displayClusterImages( complexityLevel ) {
    for (var i = 0; i < complexities[complexityLevel].length; i++) {
	cityId = complexities[complexityLevel][i];
	document.write(`<li class="ui-state-default">${cityId}. ${cities[cityId]} <img src="thumbnails/${cityId}a.jpg" width="300px"/></li>`);
    }
}

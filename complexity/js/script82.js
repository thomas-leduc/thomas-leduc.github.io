function listClusterImages(cookies, complexityLevel) {
    tmp = "";
    for (var i = 0; i < cookies[complexityLevel].length; i++) {
	cityId = cookies[complexityLevel][i];
	tmp += `  <li class="ui-widget-content ui-corner-tr">${cityId}. ${cities[cityId]["name"]} <a href="medium/${cityId}a.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a><img src="thumbnails/${cityId}a.jpg" alt="${cityId}. ${cities[cityId]['name']}" width="300px" value="${cityId}" /></li>\n`;
    }
    return tmp;
}

function submit82() {
    var cookies = parseCookies();
    var complexities = { 'low': [], 'medium': [], 'high': [] };

    if ((cookies.visitPanel.includes('l')) && (cookies.visitPanel.includes('m')) && (cookies.visitPanel.includes('h'))) {
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

      window.location.href = "index83.html";
    } else {
      alert('Please sort the images in each of the three panels!');
    }
    //~ $("#sortable1").find("img").filter(function() { console.log('===', $(this).attr("value")); });
    //~ console.log("***", document.cookie); //~ DEBUG

    //~ var cookies = parseCookies();
    //~ var finalResult = surveyContent(cookies);
    //~ alert(finalResult); //~ DEBUG
}

function visitPanel(panelLabel) {
    var cookies = parseCookies();
    document.cookie = `visitPanel=${cookies.visitPanel}${panelLabel}; SameSite=Strict`;
}

$(document).ready(function() {
    $("#tabs").tabs();
    
    $( "#sortable1" ).sortable();
    $( "#sortable1" ).disableSelection();
    $( "#sortable2" ).sortable();
    $( "#sortable2" ).disableSelection();
    $( "#sortable3" ).sortable();
    $( "#sortable3" ).disableSelection();

    // Image preview function, demonstrating the ui.dialog used as a modal window
    function viewLargerImage( $link ) {
	var src = $link.attr( "href" ),
            title = $link.siblings( "img" ).attr( "alt" ),
            $modal = $( "img[src$='" + src + "']" );

	if ( $modal.length ) {
            $modal.dialog( "open" );
	} else {
            var img = $( "<img alt='" + title + "' width='384' height='288' style='display: none; padding: 8px;' />" )
		.attr( "src", src ).appendTo( "body" );
            setTimeout(function() {
		img.dialog({
		    title: title,
		    width: 620,
		    modal: true
		});
            }, 1 );
	}
    }

    // Resolve the icons behavior with event delegation
    $( "ul > li" ).on( "click", function( event ) {
	var $item = $( this ),
            $target = $( event.target );
	if ( $target.is( "a.ui-icon-zoomin" ) ) {
            viewLargerImage( $target );
	}
	return false;
    });
});

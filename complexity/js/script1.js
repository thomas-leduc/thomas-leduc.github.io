function listGalleryImages(cities) {
    tmp = "";
    for (var i = 1; i <= Object.keys(cities).length; i++) {
	tmp += '  <li class="ui-widget-content ui-corner-tr">\n';
	tmp += `    <h5 class="ui-widget-header">${i}. ${cities[i]}</h5>\n`;
	tmp += `    <input id="cityId" type="hidden" name="cityId" value="${i}" />\n`;
	tmp += `    <img src="thumbnails/${i}a.jpg" alt="${i}. ${cities[i]}" width="96" height="72" />\n`;
	tmp += `    <a href="large/${i}a.jpg" title="View larger image" class="ui-icon ui-icon-zoomin">View larger</a>\n`;
	tmp += '  </li>\n';
    }
    return tmp;
}

function parseCookies() {
    if ("" == document.cookie) {
	return undefined;
    } else {
	const reducer = (accumulator, currentValue) => {
	    let [key, value] = currentValue.split("=");
	    return { ...accumulator, [key]: decodeURIComponent(value) };
	};
	cookies = document.cookie.split("; ").reduce(reducer, {});
	cookies.lowComplexity = eval(cookies.lowComplexity);
	cookies.mediumComplexity = eval(cookies.mediumComplexity);
	cookies.highComplexity = eval(cookies.highComplexity);
	return cookies;
    }
}

function submit1() {
    var complexities = { 'low': [], 'medium': [], 'high': [] };
    
    galleryIsEmpty = (0 == $("#gallery").find("input").size());
    if (galleryIsEmpty) {
	$("#lowComplexity").find("input").filter(function() { // TL 15.07.2021: DEBUG from "#cityId" to "input"
	    complexities.low.push( Number($(this).attr("value")) );
	});
	$("#mediumComplexity").find("#cityId").filter(function() {
	    complexities.medium.push( Number($(this).attr("value")) );
	});
	$("#highComplexity").find("#cityId").filter(function() {
	    complexities.high.push( Number($(this).attr("value")) );
	});
	
	// SET COOKIES
	document.cookie = `lowComplexity=[${complexities.low}]; SameSite=Strict`;
	document.cookie = `mediumComplexity=[${complexities.medium}]; SameSite=Strict`;
	document.cookie = `highComplexity=[${complexities.high}]; SameSite=Strict`;
	document.cookie = `date1=${new Date(Date.now())}; SameSite=Strict`;

	console.log("***", document.cookie); //~ DEBUG
	window.location.href = "index52.html";
	
    } else {
	alert('There are still images to be sorted!');
    }
}

$(document).ready( function() {
    // There's the gallery and the lowComplexity, mediumComplexity, and highComplexity
    var $gallery = $( "#gallery" ),
	$lowComplexity = $( "#lowComplexity" ),
	$mediumComplexity = $( "#mediumComplexity" ),
	$highComplexity = $( "#highComplexity" );
    
    // Let the gallery items be draggable
    $( "li", $gallery ).draggable({
	cancel: "a.ui-icon", // clicking an icon won't initiate dragging
	revert: "invalid", // when not dropped, the item will revert back to its initial position
	containment: "document",
	helper: "clone",
	cursor: "move"
    });
    
    // Let the lowComplexity be droppable, accepting the gallery items
    $lowComplexity.droppable({
	accept: "#gallery > li",
	classes: {
            "ui-droppable-active": "ui-state-highlight"
	},
	drop: function( event, ui ) {
            classifyImageLowComplexity( ui.draggable );
	}
    });
    
    // Let the mediumComplexity be droppable, accepting the gallery items
    $mediumComplexity.droppable({
	accept: "#gallery > li",
	classes: {
            "ui-droppable-active": "ui-state-highlight"
	},
	drop: function( event, ui ) {
            classifyImageMediumComplexity( ui.draggable );
	}
    });
    
    // Let the mediumComplexity be droppable, accepting the gallery items
    $highComplexity.droppable({
	accept: "#gallery > li",
	classes: {
            "ui-droppable-active": "ui-state-highlight"
	},
	drop: function( event, ui ) {
            classifyImageHighComplexity( ui.draggable );
	}
    });
    
    // Let the gallery be droppable as well, accepting items from the lowComplexity mediumComplexity highComplexity
    $gallery.droppable({
	accept: ["#lowComplexity li", "#mediumComplexity li", "#highComplexity li"],
	classes: {
            "ui-droppable-active": "custom-state-active"
	},
	drop: function( event, ui ) {
            recycleImage( ui.draggable );
	}
    });
    
    // Image deletion function
    var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    function classifyImageLowComplexity( $item ) {
	$item.fadeOut(function() {
            var $list = $( "ul", $lowComplexity ).length ?
		$( "ul", $lowComplexity ) :
		$( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $lowComplexity );
	    
            $item.find( "a.ui-icon-trash" ).remove();
            $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
		$item
		    .animate({ width: "48px" })
		    .find( "img" )
		    .animate({ height: "36px" });
            });
	});
    }
    
    function classifyImageMediumComplexity( $item ) {
	$item.fadeOut(function() {
            var $list = $( "ul", $mediumComplexity ).length ?
		$( "ul", $mediumComplexity ) :
		$( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $mediumComplexity );
	    
            $item.find( "a.ui-icon-trash" ).remove();
            $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
		$item
		    .animate({ width: "48px" })
		    .find( "img" )
		    .animate({ height: "36px" });
            });
	});
    }
    
    function classifyImageHighComplexity( $item ) {
	$item.fadeOut(function() {
            var $list = $( "ul", $highComplexity ).length ?
		$( "ul", $highComplexity ) :
		$( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $highComplexity );
	    
            $item.find( "a.ui-icon-trash" ).remove();
            $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
		$item
		    .animate({ width: "48px" })
		    .find( "img" )
		    .animate({ height: "36px" });
            });
	});
    }
    
    // Image recycle function
    var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
    function recycleImage( $item ) {
	$item.fadeOut(function() {
            $item
		.find( "a.ui-icon-refresh" )
		.remove()
		.end()
		.css( "width", "96px")
            //.append( trash_icon )
		.find( "img" )
		.css( "height", "72px" )
		.end()
		.appendTo( $gallery )
		.fadeIn();
	});
    }
    
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
		    width: 400,
		    modal: true
		});
            }, 1 );
	}
    }
    
    // Resolve the icons behavior with event delegation
    $( "ul.gallery > li" ).on( "click", function( event ) {
	var $item = $( this ),
            $target = $( event.target );
	
	if ( $target.is( "a.ui-icon-zoomin" ) ) {
            viewLargerImage( $target );
	} else if ( $target.is( "a.ui-icon-refresh" ) ) {
            recycleImage( $item );
	}
	
	return false;
    });
} );
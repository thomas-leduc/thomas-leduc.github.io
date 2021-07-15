$( function() {

    // There's the gallery and the lowComplexity
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

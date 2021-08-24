function getUid() {
    return 'xxyxxy'.replace(/[xy]/g, function(c) {
	if ('x' == c) {
	    var r = parseInt(Math.random() * 10);
	    return r.toString(10);
	} else {
	    var r = parseInt(Math.random() * 26);
	    return 'abcdefghijklmnopqrstuvwxyz'.charAt( r);
	}
    });
}

function submit70() {
    // SET COOKIES
    document.cookie = `uid=${getUid()}; SameSite=Strict`;
    document.cookie = `date0=${new Date(Date.now())}; SameSite=Strict`;
}

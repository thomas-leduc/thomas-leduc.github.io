function bootstrap83(cookies) {
    uid.value = cookies.uid;
    lowComplexity.value = `[${cookies.lowComplexity}]`; 
    mediumComplexity.value = `[${cookies.mediumComplexity}]`; 
    highComplexity.value = `[${cookies.highComplexity}]`;
    date0.value = cookies.date0;
    date1.value = cookies.date1;
    date2.value = cookies.date2;
    date3.value = 'n/a';
}

function submit83() {
    date3.value = new Date(Date.now());
    deleteCookies();
}

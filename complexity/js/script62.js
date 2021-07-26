function bootstrap() {
	var cookies = parseCookies();
	uid.value = Math.round(Math.random() * 1e9);
	lowComplexity.value = `[${cookies.lowComplexity}]`; 
	mediumComplexity.value = `[${cookies.mediumComplexity}]`; 
	highComplexity.value = `[${cookies.highComplexity}]`;
	date0.value = cookies.date0;
	date1.value = cookies.date1;
	date2.value = new Date(Date.now());
	//~ deleteCookies();
}

function deleteCookies() {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "fname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "lname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "city=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "gender=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "skills=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date0=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
    document.cookie = "lowComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "mediumComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "highComplexity=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
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

function surveyContent(cookies) {
    return `uid = ${cookies.uid}
fname = ${cookies.fname}
lname = ${cookies.lname}
city = ${cookies.city}
gender = ${cookies.gender}
age = ${cookies.age}
skills = ${cookies.skills}
date0 = ${cookies.date0}
date1 = ${cookies.date1}
date2 = ${cookies.date2}
low = [${cookies.lowComplexity}]
medium = [${cookies.mediumComplexity}]
high = [${cookies.highComplexity}]
`;
}

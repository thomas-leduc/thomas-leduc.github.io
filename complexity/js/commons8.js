var cities = {
    1: {"name": "Rome", "url": "https://www.flickr.com/photos/magnusmaximus/14693935556/in/photolist-o8ZuUu-oosg7u-o91kLB-oqcPZ6-oos5j7-oqtTKp-o8Z9r7-oos8oo-ebwyNB-oqgSx7-rw7MZ5-Zyuoq8-81oC78-9LkpDY-ebmTgC-68p7NC-ebgdZv-9Lhvti-pot2PJ-Fj4fNs-dGSEdZ-o8Zi3W-oqcHkV-oqsqgf-oqszaN-oosacU-qCMs3Q-oqcLWx-oseQqx-o8Zjg6-o8Zr7v-oqgNW9-nS8Mod-oqu3DX-oqcCq4-hhimPJ-oqcFZD-e8bcPF-pzKmEP-FcXokp-dGY2JL-oVrBbv-qoDzUc-pQ9gsw-oVryxK-ebmSDm-hhi9Lp-hhhYbX-pouCmk-pAwVTb/"},
    2: {"name": "London", "url": "https://www.flickr.com/photos/52611380@N05/14129088256"},
    3: {"name": "Barcelona", "url": "https://www.flickr.com/photos/jweiss3/39369944804/"},
    4: {"name": "New York", "url": "https://www.flickr.com/photos/elizaroff/26887500010/in/photolist-GXXt1o-86bUaE-8V6Ggy-4q9mPa-g2Pv6k-5BcKvt-VRabWV-75S1nx-PX73V1-75S1FR-rfGNeb-nPV4Wz-8U7pwX-nN5EJL-sbPEji-2kBHrLY-5oAsJ1-bnVBXU-aiGvCh-awTHQg-EGDP4V-nN8PU4-5vixK9-9TA3iZ-kbwBwK-z3kj4-62VASY-MRsAZ-5N3XcV-5owePX-5Vmirh-amZy8Q-dij3M6-fSeFuW-62ycBk-66zZuE-bKnbc2-53wCGx-azqQdm-66vNUD-2kXZTEd-2gZTj3r-aq65Fn-2jYKgeV-8BbwTF-5viEL5-5vizeo-4Gn9cz-dywHaP-62Rkyg"},
    5: {"name": "Kaysersberg", "url": "https://www.flickr.com/photos/joanbrebo/26110593458/"},
    6: {"name": "Pedraza", "url": "https://www.flickr.com/photos/100759833@N05/21641284591/"},
    7: {"name": "Marrakesh", "url": "https://www.flickr.com/photos/mr-pi/23618908990/in/photolist-BZ85LN-7zdwyH-KTmfSb-7zdixp-2cty3PS-dpdz1K-7zh2Kf-c6pTNh-7zh42Q-26kaqrJ-vxKFEY-7zdvRi-7zh55J-FnqdU9-7zrRzx-vxKCGd-22ijE3P-dpda8v-7zdhja-9uV4t6-PaKCTa-7zdfE2-7zdvaD-7zduvT-dzwRS7-qLRni8-p14MUV-25AETEu-25Srnm1-E1HXJB-DxR9kx-CkZGQL-2fM2Wdn-7zdfUX-23A9hwi-2aQZxcb-dzryWa-7zerk6-7zh4JU-27mM7bC-7zrSNk-9psmbj-6eb7Nb-22HTf1r-G5Rbhj-dpdtrm-24xyW9L-7zdg9i-7zh2X9-7zdvxg"},
    8: {"name": "St Johns", "url": "https://www.flickr.com/photos/adamreeder/31809002663/"},
    9: {"name": "Pingyao", "url": "https://www.flickr.com/photos/stevecadman/117987194/"},
    10: {"name": "Kowloon", "url": "https://www.flickr.com/photos/aschaf/5678777097/"},
    11: {"name": "Truro", "url": "https://www.flickr.com/photos/75487768@N04/21864237850/"},
    12: {"name": "Trento", "url": "https://www.flickr.com/photos/75487768@N04/30277690023/"},
    13: {"name": "Durham", "url": "https://www.flickr.com/photos/75487768@N04/23440183809/"},
    14: {"name": "Augsburg", "url": "https://www.flickr.com/photos/75487768@N04/11749539833/"},
    15: {"name": "Mittenwald", "url": "https://www.flickr.com/photos/75487768@N04/6804748975/"},
    16: {"name": "San Juan", "url": "https://www.flickr.com/photos/wka/6974767229/in/photolist-bCkvip-RY1vf2-4jmdC-GzwryQ-ABmhxB-7s6ACa-ehEBiq-5vRYwD-hvz8WM-HDX6yT-q5SNBW-zsAtde-djz16q-f38r9R-22NnLfY-2dr47Kc-fV4Zbw-23E95am-4L7sds-qex9UT-FQorjz-byw8DS-25fZqwg-HZzXNc-pgELWa-26ZfkPf-iHNj-qeE3Zd-kVTp2-fqtwAP-8oC6Fe-7V4cv8-9GaQQQ-bAe2nk-vhag21-cGygx-pPF8Ej-fziTJ9-212NCWh-27aBPiH-j4opt-Rr7qi7-DM5tpK-bAXNSH-dN3Eci-26SyV5a-cUbopN-GtbQhU-Eyv6Wh-ntoQCA"},
    17: {"name": "Toxteth", "url": "https://www.flickr.com/photos/dgeezer/20625227259/"},
    18: {"name": "Idstein", "url": "https://www.flickr.com/photos/75487768@N04/15293168261/"},
    19: {"name": "Mantova", "url": "https://www.flickr.com/photos/75487768@N04/6878442603/"},
    20: {"name": "Gloucester", "url": "https://www.flickr.com/photos/75487768@N04/16197025097/"},
    21: {"name": "Goslar", "url": "https://www.flickr.com/photos/75487768@N04/15988079587/"},
    22: {"name": "Lincoln", "url": "https://www.flickr.com/photos/75487768@N04/26849276235/"},
    23: {"name": "Vienna", "url": "https://www.flickr.com/photos/75487768@N04/28048407321/"},
    24: {"name": "Bacolod City", "url": "https://www.flickr.com/photos/beegee49/25309363272/"},
    25: {"name": "Manchester", "url": "https://www.flickr.com/photos/10413717@N08/5927650273/"},
    26: {"name": "Barcelona", "url": "https://www.flickr.com/photos/sanderwapstra/5215064012/"},
    27: {"name": "La Paz", "url": "https://www.flickr.com/photos/psyberartist/5460883510/"},
    28: {"name": "St Petersburg", "url": "https://www.flickr.com/photos/fotorus/8035168225/in/photolist-foPYWQ-5AwVZi-df3kzc"},
    29: {"name": "Zermatt", "url": "https://www.flickr.com/photos/133753799@N04/36497275784/"},
    30: {"name": "Venlo", "url": "https://www.flickr.com/photos/rubenholthuijsen/23975317436/"},
    31: {"name": "Copenhagen", "url": "https://www.flickr.com/photos/75487768@N04/22822316486/"},
    32: {"name": "Lund", "url": "https://www.flickr.com/photos/75487768@N04/22818034023/"},
    33: {"name": "Brixen", "url": "https://www.flickr.com/photos/75487768@N04/6833339197/"},
    34: {"name": "York", "url": "https://www.flickr.com/photos/75487768@N04/28477492402/"},
    35: {"name": "Wells", "url": "https://www.flickr.com/photos/shirokazan/4787267830/"},
    36: {"name": "Wiesbaden", "url": "https://www.flickr.com/photos/75487768@N04/15795560566/"},
    37: {"name": "Annecy", "url": "https://www.flickr.com/photos/75487768@N04/27489887220/"},
    38: {"name": "Venice", "url": "https://www.flickr.com/photos/75487768@N04/6793692062/"}
};

var helpVideo = 'To see the help video, <a href="https://vimeo.com/609665071" target="_blank">click here</a>';
var entirePhotoGallery = 'To see the entire photo gallery, <a href="https://vertragus.github.io/urbanphotocomplexity/" target="_blank">click here</a>';

//~ 24.08.2021
/* 19, 25, 26, 33 */
toDelete = Array().concat([5, 8, 11, 14, 20, 21, 22, 23], [29, 30, 32, 34, 37]);
for (key in toDelete) {
    delete(cities[toDelete[key]]);
}

//~ DEBUG
/*
for (i = 6; i <= 38; i++) {
  delete(cities[i]);
}
*/

function deleteCookies() {
    document.cookie = "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "city=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "gender=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "skills=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date0=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date1=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date2=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    document.cookie = "date3=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Strict";
    
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

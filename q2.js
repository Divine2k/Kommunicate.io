
function getUrlParameterValue(url, parameter) {
    //Todo: complete this code
    var url = new URL(url);
    var c = url.searchParams.get(parameter);
    console.log(c);
    }

var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
getUrlParameterValue(url, "utm_medium")
getUrlParameterValue(url, "utm_campaign")
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars= query.split('&');
    for (var i = 0; 1 < vars.length; i++){
        var pair = vars[i].split('=');
        if(decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    
    return undefined;
}
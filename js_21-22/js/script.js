var app = {
    sayMyName: function(name) {
        if (name === "walter white") {
            var answer = ("you goddamn right");
        }
        return answer;
    },
    pow: function(y, n) {
    	var res = y;
    	for (var i = 1; i < n; i++) {
    		var res = res * y;
    	}
    	return res;
    }
}

try {
    module.exports = app;
} catch(e) {
    console.log("все хорошооо, но тут есть небольшая: " + e.name);
}

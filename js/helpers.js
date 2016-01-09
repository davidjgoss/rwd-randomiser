(function() {
    var helpers = {
        getRandomLength: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        fixupURL: function(url) {
            if (!url.match(/^https?\:\/\/.+$/)) {
                return "http://" + url;
            }
            return url;
        }
    };

    if (typeof define === "function" && define.amd) {
        define([], function() {return helpers});
    } else if (typeof module !== "undefined") {
        module.exports = helpers;
    }
}());
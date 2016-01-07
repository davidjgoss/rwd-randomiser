define([], function() {
    return {
        getRandomLength: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },

        fixupURL: function(url) {
            if (!url.match(/^https?\:\/\/.+$/)) {
                return "http://" + url;
            }
            return url;
        }
    }
});
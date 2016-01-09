var helpers = require("../js/helpers");

describe("helpers tests", function() {
    it("should return an integer length between the given min and max", function() {
        expect(helpers.getRandomLength(1, 10)).not.toBeLessThan(1);
    });

    it("should add 'http://' to urls with no protocol", function() {
        expect(helpers.fixupURL("foo.com")).toBe("http://foo.com");
        expect(helpers.fixupURL("http://foo.com")).toBe("http://foo.com");
        expect(helpers.fixupURL("https://foo.com")).toBe("https://foo.com");
    });
});

(function() {

    function getRandomLength(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function fixupURL(url) {
        if (!url.match(/^https?\:\/\/.+$/)) {
            return "http://" + url;
        }
        return url;
    }

    angular.module("rwdRandomiser", [])
        .controller("AppController", ["$scope", function($scope) {
            function randomise() {
                $scope.model.width = getRandomLength(320, window.innerWidth - 100);
                $scope.model.height = getRandomLength(320, window.innerHeight - 200);
                $scope.model.url = fixupURL($scope.model.url);

                $scope.iframe
                    .attr("width", $scope.model.width)
                    .attr("height", $scope.model.height)
                    .attr("src", $scope.model.url);
            }

            angular.extend($scope, {
                model: {
                    url: "http://davidgoss.co/",
                    width: 320,
                    height: 480
                },
                iframe: angular.element(document).find("iframe"),
                randomise: randomise
            });

            randomise();
        }]);
}());

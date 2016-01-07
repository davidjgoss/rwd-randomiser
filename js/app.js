require(["generator"], function(generator) {
    angular.module("rwdRandomiser", [])
        // using custom interpolation symbols to avoid conflicts with jekyll
        .config(["$interpolateProvider", function($interpolateProvider) {
            $interpolateProvider.startSymbol("##");
            $interpolateProvider.endSymbol("##");
        }])
        .controller("AppController", ["$scope", function($scope) {
            function randomise() {
                var maxWidth = window.innerWidth - 50,
                    maxHeight = window.innerHeight - 200;

                $scope.model.width = generator(maxWidth / 4, maxWidth);
                $scope.model.height = generator(maxHeight / 2, maxHeight);

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
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["rwdRandomiser"]);
        });
});

require(["helpers"], function(helpers) {
    angular.module("rwdRandomiser", [])
        .controller("AppController", ["$scope", function($scope) {
            function randomise() {
                $scope.model.width = helpers.getRandomLength(320, window.innerWidth - 100);
                $scope.model.height = helpers.getRandomLength(320, window.innerHeight - 200);

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

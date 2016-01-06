angular.module("rwdRandomiser", [])
	.controller("AppController", function($scope) {
		function randomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}

		function randomise() {
			var maxWidth = window.innerWidth - 50,
				maxHeight = window.innerHeight - 200;

            $scope.model.width = randomInt(maxWidth / 4, maxWidth);
            $scope.model.height = randomInt(maxHeight / 2, maxHeight);

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
	});
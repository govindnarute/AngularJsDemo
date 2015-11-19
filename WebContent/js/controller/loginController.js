
myApp.controller("loginController", [ '$scope', '$rootScope', '$http',
		'DRAFT_DYNASTY_URL', 'APIServices',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices) {
			$scope.test = "TTTTTTTTTTTTTEst"
			$scope.clickMe = function() {

				APIServices.validateLogin("test", "test")
				.success(function(data, status) {
					$rootScope.updateRecord = false;
					alert('success')
				}).error(function(data, status) {
                      
					console.log("tttttttttttt")
					console.log(data)
					console.log(status)
					console.log("tttttttttttt")
					alert('faild')
					// console(status);
					// alert("Failed");
				});

			};
		} ]);
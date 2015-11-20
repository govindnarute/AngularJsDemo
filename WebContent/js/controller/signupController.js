myApp.controller("signupController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices) {

			$scope.registerUser = function() {

				console.log($scope.firstname)
				console.log($scope.lastname)
				console.log($scope.nickname)
				console.log($scope.password)
				console.log($scope.path)
				console.log($scope.email)

				APIServices.registerUser($scope.firstname, $scope.lastname,
						$scope.path, $scope.email, $scope.password,
						$scope.nickname).success(function(data, status) {
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
			};// register user

			// APIServices.validateLogin("test", "test")
			// .success(function(data, status) {
			//					
			// alert('success')
			// }).error(function(data, status) {
			//                      
			// console.log("tttttttttttt")
			// console.log(data)
			// console.log(status)
			// console.log("tttttttttttt")
			// alert('faild')
			// // console(status);
			// // alert("Failed");
			// });
			//
			// };
		} ]);
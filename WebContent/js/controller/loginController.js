myApp.controller("loginController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices) {
			// This is for login user
			$scope.signIn = function() {
				APIServices.validateLogin($scope.email, $scope.password)
						.success(function(data, status) {
							console.log("*********Response Login***********");
							console.log(data);
							console.log(status);
							alert('success');
						}).error(function(data, status) {

							console.log("*********Response Login***********");
							console.log(data);
							console.log(status);
							alert('faild');
							// console(status);
							// alert("Failed");
						});
			};// sign in close

			// this is for temp
			$scope.forgotPassword = function() {

				APIServices.forgotPassword("govindnarute@gmail.com").success(
						function(data, status) {
							console.log("*********Response***********");
							console.log(data);
							console.log(status);
							alert('success');
						}).error(function(data, status) {

					console.log("*********Response***********");
					console.log(data);
					console.log(status);
					alert('faild');
				});
			};// forgot close

		} ]);// controller close

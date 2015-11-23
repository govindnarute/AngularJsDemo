myApp.controller("loginController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		'$localStorage',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices,$localStorage) {
			// This is for login user
			$localStorage.myName="Govind Narute"
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
				if(!$scope.email)
				return	
				 alert('test')
				APIServices.forgotPassword($scope.email).success(
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

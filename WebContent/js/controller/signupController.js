myApp.controller("signupController", [
		'$scope',
		'$rootScope',
		'$http',
		'DRAFT_DYNASTY_URL',
		'APIServices',
		'$base64',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices,
				$base64) {

			$scope.myImage = '';
			$scope.myCroppedImage = '';
			$scope.cropImageShow=false;

			var handleFileSelect = function(evt) {
				var file = evt.currentTarget.files[0];
				var reader = new FileReader();
				reader.onload = function(evt) {
					$scope.$apply(function($scope) {
						$scope.myImage = evt.target.result;
						alert('test')
						$scope.cropImageShow=true;
						
					});
				};
				reader.readAsDataURL(file);
			};
			angular.element(document.querySelector('#fileInput')).on('change',
					handleFileSelect);
			$scope.cropImage = function() {
				//$scope.base64Image = $scope.myImage.split(",").pop();
				// $scope.encoded = $base64.encode($scope.myCroppedImage);
				$scope.base64Image = $scope.myCroppedImage.split(",").pop()
				//
				// $scope.base64Image=$scope.myCroppedImage;

			};//cropImage()

			$scope.registerUser = function() {
				alert('signup')
				if ($scope.base64Image)
					$scope.path = $scope.base64Image;
				else
					$scope.path = $scope.myImage.split(",").pop();
				alert($scope.path)
				APIServices.registerUser($scope.firstname, $scope.lastname,
						$scope.path, $scope.email, $scope.password,
						$scope.nickname).success(function(data, status) {
					console.log("*********Response Register User***********");
					console.log(data);
					console.log(status);
					alert('success');
				}).error(function(data, status) {

					console.log("*********Response Register User***********");
					console.log(data);
					console.log(status);
					alert('faild');
				});
			};// register user()

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
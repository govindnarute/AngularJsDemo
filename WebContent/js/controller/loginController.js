
myApp.controller("loginController", [ '$scope', '$rootScope', '$http',
		'DRAFT_DYNASTY_URL', 'APIServices',
		function($scope, $rootScope, $http, DRAFT_DYNASTY_URL, APIServices) {
			$scope.test = "TTTTTTTTTTTTTEst"
				
				$scope.signIn=function(){
				
				alert('in signIn')
				APIServices.validateLogin($scope.email,$scope.password)
				.success(function(data, status) {
					console.log("tttttttttttt")
					console.log(data)
					console.log(status)
					console.log("tttttttttttt")
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
			}//sign in close	
				
			
				
				
			$scope.forgotPassword = function() {

				APIServices.forgotPassword("govindnarute@gmail.com")
				.success(function(data, status) {
					
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
			}
//				APIServices.validateLogin("test", "test")
//				.success(function(data, status) {
//					
//					alert('success')
//				}).error(function(data, status) {
//                      
//					console.log("tttttttttttt")
//					console.log(data)
//					console.log(status)
//					console.log("tttttttttttt")
//					alert('faild')
//					// console(status);
//					// alert("Failed");
//				});
//
//			};
		} ]);
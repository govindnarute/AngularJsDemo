
'use strict';

/* Services */



app.factory('APIServices',['$http','DRAFT_DYNASTY_URL', function($http,DRAFT_DYNASTY_URL) {

			var draftDynastyAPI = {};



			draftDynastyAPI.validateLogin = function(email, pass) {
				alert('in services')
			        	return $http.put(DRAFT_DYNASTY_URL.loginUrl, {
							email : email,
							password : pass
						});
			};
			draftDynastyAPI.registerUser = function(firstName, lastName,profilePic,email,password,nickName) {
				alert('in register user')
			        	return $http.post(DRAFT_DYNASTY_URL.registerUrl, {
			        		firstName:firstName,
			        		lastName:lastName,
			        		profilePic:profilePic,
			        		email:email,
			        		password:password,
			        		nickName:nickName
							
						});
			};
			
			
			
			draftDynastyAPI.getCountries = function(username, pass) {
	        	return $http.get(DRAFT_DYNASTY_URL.getCountries);
	};
	
	draftDynastyAPI.forgotPassword = function(email) {
		alert('in services')
    	return $http.post(DRAFT_DYNASTY_URL.forgotPassword, {
			email : email
			
		});
};
			

			return draftDynastyAPI;
}]);

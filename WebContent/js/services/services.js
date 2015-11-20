
'use strict';

/* Services */



app.factory('APIServices',['$http','DRAFT_DYNASTY_URL', function($http,DRAFT_DYNASTY_URL) {

			var draftDynastyAPI = {};



			draftDynastyAPI.validateLogin = function(username, pass) {
				alert('in services')
			        	return $http.post(DRAFT_DYNASTY_URL.loginUrl, {
							username : username,
							password : pass
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


'use strict';

/* Services */



myApp.factory('APIServices',['$http','DRAFT_DYNASTY_URL', function($http,DRAFT_DYNASTY_URL) {

			var draftDynastyAPI = {};



			draftDynastyAPI.validateLogin = function(username, pass) {
			        	return $http.post(DRAFT_DYNASTY_URL.loginUrl, {
							username : username,
							password : pass
						});
			};
			draftDynastyAPI.getCountries = function(username, pass) {
	        	return $http.get(DRAFT_DYNASTY_URL.getCountries);
	};
			

			return draftDynastyAPI;
}]);

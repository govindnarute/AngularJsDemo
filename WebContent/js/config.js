myApp
.run(function($http) {
	 
	 // $http.defaults.headers.common.Token = $cookies.inkaAdminAuthToken;
	 $http.defaults.headers.common['Token'] ="3yUEbW_MsUCgrMJ1pRWF";
		 $http.defaults.headers.common['Authorization'] ="Basic bG9jYWxtb3RpdmVzOmxvY2FsbW90aXZlcw==";
			 $http.defaults.headers.common['Content-Type'] ="application/json";
	 $http.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		 
    $http.defaults.headers.common.language = 'en-US';
    
	});
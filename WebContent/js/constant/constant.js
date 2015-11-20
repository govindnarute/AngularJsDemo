//var serviceUrl = "http://test.pallycon.com/InkaNew/api/inkaAdminWebservice/";
var serviceUrl = "http://52.10.100.99:3000/";
//var serviceUrl = "/Inka/api/inkaAdminWebservice/";

myApp.constant('DRAFT_DYNASTY_URL', {
        loginUrl: serviceUrl + "sessions",
        getCountries:serviceUrl + "get_countries",
        forgotPassword:serviceUrl + "forgot-password"
       // billingUrl : 'vendor/clientdata/billinginfo'
});

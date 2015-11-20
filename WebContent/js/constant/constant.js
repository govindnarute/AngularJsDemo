//var serviceUrl = "http://test.pallycon.com/InkaNew/api/inkaAdminWebservice/";
//var serviceUrl = "http://52.10.100.99:3000/";
var serviceUrl = "http://192.168.10.114:8080/DraftDynasty/api/";//pooja local
//var serviceUrl = "/Inka/api/inkaAdminWebservice/";

myApp.constant('DRAFT_DYNASTY_URL', {
        loginUrl: serviceUrl + "user/logIn",
        getCountries:serviceUrl + "get_countries",
        forgotPassword:serviceUrl + "forgot-password",
        registerUrl:serviceUrl + "user"
       // billingUrl : 'vendor/clientdata/billinginfo'
});

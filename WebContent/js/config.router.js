myApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'template/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('login', {
        	url: '/login',
            templateUrl: 'template/login.html',
            resolve: {
                deps: ['$ocLazyLoad',
                  function( $ocLazyLoad ){
                    return $ocLazyLoad.load(['js/controller/loginController.js']);
                }]
              }
            // we'll get to this in a bit       
        })
        .state('signup', {
        	url: '/signup',
            templateUrl: 'template/signup.html'
            // we'll get to this in a bit       
        })
        
        ;
        
});
(function(){
    angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider    
        .when('/', {
            templateUrl: 'views/welcome.html',
            controller: 'welcomeCtrl',
            controllerAs: 'vm'
        })

        .when('/tweets', {
            templateUrl: 'views/tweets.html',
            controller: 'tweetCtrl',
            controllerAs: 'vm'
        })
        
        .otherwise({
            redirectTo: '/'
        })

    }]);
})();
// $http.get('/messages', config).then(successCallback, errorCallback);



 
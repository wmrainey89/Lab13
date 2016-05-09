  

(function () {
   'use strict';

   //register controller
   angular.module('app').controller('tweetCtrl', tweetController);

   //inject controller dependencies
   tweetController.$inject = ['$http', '$rootScope', 'tweetService'];

   //controller definition
   function tweetController($http, $rootScope, tweetService) {
       var vm = this;
       vm.init = init;
       vm.getTweets = getTweets; 
       vm.postTweet = postTweet;
       
       //declare variables
       vm.tweets = [];
       
       
       //function definitions
       function init() {
           //get model initialize local variables
           getTweets();
       }
       
       function getTweets(){
           $http.get('/messages').then(function(response){
               vm.tweets = response.data;
           },function(error){
               console.log(error.statusText);
           });
        vm.tweets = tweetService.get();
        tweetService.get().then(function(data){vm.tweets = data;});
        
       }
       
       function postTweet(){
           vm.userTweet.user = $rootScope.userName;
           $http.post('/messages', vm.userTweet).then(function(response){
               getTweets();
           });
       }
   }
})();


(function () {
   'use strict';

   //register controller
   angular.module('app').controller('welcomeCtrl', welcomeController);

   //inject controller dependencies
   welcomeController.$inject = ['$http', '$rootScope', '$location'];

   //controller definition
   function welcomeController($http, $rootScope, $location) {
       var vm = this;
       vm.init = init;
       vm.setUser = setUser;
       
       //declare variables
       vm.userName = '';
       
       //function definitions
       function init() {
           //get model initialize local variables
           
       }
       
       function setUser(){
           if(vm.userName !== '' && vm.userName !== undefined){
               $rootScope.userName = vm.userName;
               $location.path('/tweets');
           }           
       }       
   }
})();
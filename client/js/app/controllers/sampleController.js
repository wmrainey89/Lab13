(function () {
   'use strict';

   //register controller
   angular.module('app').controller('sampleCtrl', sampleController);

   //inject controller dependencies
   sampleController.$inject = ['$http'];

   //controller definition
   function sampleController($http) {
       var vm = this;
       vm.init = init;
       //function definitions
       function init() {
           //get model initialize local variables
       }
       
   }
})();
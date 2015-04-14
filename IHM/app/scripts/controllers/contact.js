'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ihmApp
 */

angular.module('ihmApp')
  .controller('ConCtrl', function($scope,$http){
    $scope.contract = "";

     $http.get("assets/contract.json")
       .success(function (data){
          $scope.contract= data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });
     }
  );
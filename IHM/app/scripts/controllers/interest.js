'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ihmApp
 */

angular.module('ihmApp')
  .controller('InterestCtrl', function($scope,$http){
    $scope.interest = "";

     $http.get("assets/interet.json")
       .success(function (data){
          $scope.interet = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });
     }
  );
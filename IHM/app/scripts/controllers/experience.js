'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('ExperienceCtrl', function($scope,$http){
      $scope.exp = "";
      
      $http.get("assets/experience.json")
       .success(function (data){
          $scope.exp = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });
     }
  );

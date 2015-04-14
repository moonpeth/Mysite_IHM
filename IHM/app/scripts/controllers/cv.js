'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('CvCtrl', function($scope,$http){
    $scope.exp = "";
    $scope.edu = "";
    $scope.interet = "";
    $scope.comp = "";

    $http.get("assets/experience.json")
       .success(function (data){
          $scope.exp = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });

       $http.get("assets/education.json")
       .success(function (data){
          $scope.edu = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });

       $http.get("assets/interet.json")
       .success(function (data){
          $scope.interet = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });

       $http.get("assets/competence.json")
       .success(function (data){
          $scope.comp = data;
          console.log(data);
      })
       .error(function (error){
           console.log(error);
       });


     }
  );

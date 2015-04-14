'use strict';

/**
 * @ngdoc function
 * @name ihmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ihmApp
 */
angular.module('ihmApp')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.exp = "";
    $scope.edu = "";
    $scope.interet = "";


    // $http.get("assets/experience.json")
    //    .success(function (data){
    //       $scope.exp = data;
    //       console.log(data);
    //   })
    //    .error(function (error){
    //        console.log(error);
    //    });

    //    $http.get("assets/education.json")
    //    .success(function (data){
    //       $scope.edu = data;
    //       console.log(data);
    //   })
    //    .error(function (error){
    //        console.log(error);
    //    });

    //    $http.get("assets/interet.json")
    //    .success(function (data){
    //       $scope.interet = data;
    //       console.log(data);
    //   })
    //    .error(function (error){
    //        console.log(error);
    //    });
  });

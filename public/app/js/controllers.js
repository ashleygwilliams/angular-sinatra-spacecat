'use strict';

var spacecatControllers = angular.module('spacecatControllers', []);

spacecatApp.controller('CatListCtrl', ['$scope', 'Spacecat',
  function($scope, Spacecat){
    //$http.get('http://localhost:9393/spacecats').success(function(data) {
    //  $scope.cats = data;
    //});
 
    $scope.cats = Spacecat.query();

    $scope.orderProp = 'name';
  }]);

spacecatControllers.controller('CatDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get("cats/cats-" + $routeParams.catId + '.json').success(function(data) {
      $scope.cat = data[0];
      $scope.mainImg = data[0].images[0];
    });

    $scope.setImage = function(imageName) {
      $scope.mainImg = imageName;
    }
  }]);
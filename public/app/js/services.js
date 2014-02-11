var spacecatServices = angular.module('spacecatServices', ['ngResource']);

spacecatServices.factory('Spacecat', ['$resource',
  function($resource){
    return $resource('http://localhost:9393/spacecats', {}, {
      query: {method: 'GET', params: {}, isArray:true}
    });
  }]);
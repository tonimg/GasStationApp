angular.module('gasStationApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/filters', {
        templateUrl: '/templates/filters.html',
        controller: 'filtersController'
      })
      .when('/filters', {
        templateUrl: '/templates/map.html',
        controller: 'mapController'
      })
  })

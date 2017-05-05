angular.module('gasStationApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .when('/filters/:location', {
        templateUrl: 'templates/filters.html',
        controller: 'filtersController'
      })
  })

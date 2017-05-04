angular.module('gasStationApp')
  .controller('filtersController', function ($scope, $rootScope, $routeParams, apiService) {
    var currentLocation = $routeParams.location
    apiService.getStations(currentLocation)
      .then(function (stations) {
        console.log('from controller filtersController...')
        console.log(stations)
        $scope.stations = stations
      })
  })

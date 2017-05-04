angular.module('gasStationApp')
  .controller('filtersController', function ($scope, $rootScope, $routeParams, apiService) {
    var idTown = $routeParams.location
    apiService.getStationsByTown(idTown)
      .then(function (stations) {
        $scope.stations = stations
      })
  })

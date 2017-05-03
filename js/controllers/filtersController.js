angular.module('gasStationApp')
  .controller('filtersController', function ($scope, $rootScope, apiService) {
    $scope.title = 'Filters'
    $scope.searchLocation = function () {
      var userLocation = $scope.locationName
      apiService.getLocation()
        .then(function (response) {
          console.log(response)

          var gasStations = response.data // nuestro objeto
          $scope.gasStations = gasStations
          $rootScope.gasStations = $scope.gasStations
        })
    }
  })

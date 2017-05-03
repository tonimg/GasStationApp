angular.module('gasStationApp')
  .controller('homeController', function ($scope, $rootScope, apiService) {
    $scope.title = 'HOME'
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

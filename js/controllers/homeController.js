angular.module('gasStationApp')
  .controller('homeController', function ($scope, apiService) {
    $scope.title = 'HOME'
    $scope.searchLocation = function () {
      var userLocation = $scope.locationName
      apiService.getLocation()
        .then(function (response) {
          console.log(response)

          var gasStations = response.data // nuestro objeto
          $scope.gasStations = gasStations

          console.log(gasStations)
        })
    }
  })

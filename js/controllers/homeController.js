angular.module('gasStationApp')
  .controller('homeController', function ($scope, $location, apiService) {
    $scope.title = 'HOME'

    function searchLocation () {
      var userLocation = $scope.locationName
      apiService.getLocation()
        .then(function (response) {
          console.log(response)

          var gasStations = response.data // nuestro objeto
          $scope.gasStations = gasStations
        })
    }
    searchLocation()

    $scope.getStations = function () {
      $location.path('/filters/' + $scope.queryLocation)
    }
  })

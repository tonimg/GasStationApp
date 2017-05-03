angular.module('gasStationApp')
  .controller('filtersController', function ($scope, $rootScope, $routeParams, apiService) {
    var currentLocation = $routeParams.location
    apiService.getStations(currentLocation)
      .then(function (stations) {
        console.log('from controller filtersController...')
        console.log(stations)
        $scope.stations = stations
      })
    // $scope.title = 'Filters'
    // $scope.searchLocation = function () {
    //   var userLocation = $scope.locationName
    //   apiService.getLocation()
    //     .then(function (response) {
    //       console.log(response)

    //       var gasStations = response.data // nuestro objeto
    //       $scope.gasStations = gasStations
    //       $rootScope.gasStations = $scope.gasStations
    //     })
    // }
  })

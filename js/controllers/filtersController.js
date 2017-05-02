angular.module('gasStationApp')
  .controller('filtersController', function ($scope, apiService) {
    $scope.searchLocation = function () {
      var userLocation = $scope.locationName
      apiService.getLocation()
        .then(function (response) {
          // console.log(userLocation)
          console.log(response.data.ListaEESSPrecio)
          $scope.listLocation = response.data.ListaEESSPrecio // nuestro objeto

          var barcelonaStation = []
          angular.forEach($scope.listLocation, function (value, key) {
            if (value.Provincia === 'BARCELONA') {
              barcelonaStation.push(value)
            }
          })
          console.log(barcelonaStation)
        })
    }
  })

angular.module('gasStationApp')
    .factory('apiService', function ($http) {
      function getLocation () {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = '/data/gas-stations-small.json' // ruta local para trabajar con ella
        return $http.get(urlGas)
      }
      return {
        getLocation: getLocation
      }
    })

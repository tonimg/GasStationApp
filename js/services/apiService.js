angular.module('gasStationApp')
    .factory('apiService', function ($http) {
      function getLocation () {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = '/data/gas-stations-small.json' // ruta local para trabajar con ella
        return $http.get(urlGas)
      }

      function getStations (location) {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = '/data/gas-stations-small.json' // ruta local para trabajar con ella
        return $http.get(urlGas)
                  .then(function (response) {
                    return response.data
                  })
                  .then(function (stations) {
                    return stations.filter(function (station) {
                      return station['Municipio'] === location
                    })
                  })
      }

      return {
        getLocation: getLocation,
        getStations: getStations
      }
    })

// Get locacions into province
angular.module('gasStationApp')
    .factory('apiService', function ($http) {
      function getLocation () {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = 'data/town.json' // ruta local para trabajar con ella
        return $http.get(urlGas)
      }

// Get all stations of locations
      function getStations (location) {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = 'data/stations.json' // ruta local para trabajar con ella
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
// Get the IdTown and compare with another json file.
      function getStationsByTown (idTown) {
        // var urlGas = 'https://serene-falls-80386.herokuapp.com/carburantes'
        var urlGas = 'data/stations.json' // ruta local para trabajar con ella
        return $http.get(urlGas)
                  .then(function (response) {
                    return response.data
                  })
                  .then(function (stations) {
                    return stations.filter(function (station) {
                      return station['IDMunicipio'] === idTown
                    })
                  })
      }
      return {
        getLocation: getLocation,
        getStations: getStations,
        getStationsByTown: getStationsByTown
      }
    })

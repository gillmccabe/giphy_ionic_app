(function(){
  'use strict';

  angular
    .module('app')
    .factory('FavouriteService', FavouriteService)

  FavouriteService.$inject = ['$http', '$q'];

  function FavouriteService($http, $q) {
    var service = {
      getFavourites: getFavourites,
      addFavourite: addFavourite,
      removeFavourite: removeFavourite
    };
    return service;

    function getFavourites(){

    }

    function addFavourite(slug){
      console.log(slug);
    }

    function removeFavourite(slug){
      console.log(slug);
    }
  }

})();
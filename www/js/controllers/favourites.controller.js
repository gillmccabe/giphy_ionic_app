(function(){
  'use strict';

  angular
    .module('app')
    .controller('FavouritesController', FavouritesController)

  FavouritesController.$inject = ['$scope', 'FavouriteService'];

  function FavouritesController($scope, FavouriteService) {
    /* jshint validthis: true */
    var vm = this;

    vm.getFavourites = getFavourites;

    $scope.$on("$ionicView.beforeEnter", function(event, data){
       console.log("State Params: ", data.stateParams);
    });
    //////////////

    function getFavourites(){

    }
  }

})();
(function(){
  'use strict';

  angular
    .module('app')
    .controller('SearchController', SearchController)

  SearchController.$inject = ['$scope', 'Giphy', 'FavouriteService'];

  function SearchController($scope, Giphy, FavouriteService) {
    /* jshint validthis: true */
    var vm = this;

    vm.search = {
      term: '', 
      results: null
    };

    vm.searchGifs = searchGifs;
    vm.addFavourite = addFavourite;

    $scope.$on("$ionicView.beforeEnter", function(event, data){
       console.log("State Params: ", data.stateParams);
    });
    //////////////

    function searchGifs() {
      Giphy.search(vm.search.term)
      .then(function(data){
        vm.search.results = data;
      }, function(error){
        console.log(error);
      })
    }

    function addFavourite(slug) {
      FavouriteService.addFavourite(slug);    
    }
  }

})();
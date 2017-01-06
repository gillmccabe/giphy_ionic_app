(function(){
  'use strict';

  angular
    .module('app')
    .controller('DiscoverController', DiscoverController)

  DiscoverController.$inject = ['$scope', 'Giphy', 'FavouriteService'];

  function DiscoverController($scope, Giphy, FavouriteService) {
    /* jshint validthis: true */
    var vm = this;

    vm.trendingGifs = null; 
    vm.getTrending = getTrending;
    vm.favouriteGif = favouriteGif; 

    $scope.$on("$ionicView.beforeEnter", function(event, data){
       getTrending();
    });

    //////////////

    function getTrending(refresh){
      Giphy.trending(refresh)
        .then(function(data){
          vm.trendingGifs = data;
        }, function (error){
          console.log(error);
        });
    }

    function favouriteGif(slug){
      FavouriteService.addFavourite(slug);
    }

  }

})();
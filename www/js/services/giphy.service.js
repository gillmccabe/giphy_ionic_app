(function() {
    'use strict';

    angular
        .module('app')
        .factory('Giphy', Giphy);

    Giphy.$inject = ['$http', '$q', '_apiKey', '$rootScope'];

    function Giphy($http, $q, _apiKey, $rootScope) { 
      var service = {
        search: search, 
        trending: trending
      };
      return service;

      ///////////////

      function search (term){
        var deferred = $q.defer();

        var searchUrl = 'http://api.giphy.com/v1/gifs/search?q='; 
        var url = searchUrl + term + '&' + _apiKey;

        $http.get(url)
          .then(function(response){
              deferred.resolve(response.data.data);
            }, function(error){
              console.log(error);
            });
        return deferred.promise; 
      };

      var trendingGifs = null;
      function trending (refresh){
        var deferred = $q.defer();

        var trendingUrl = 'http://api.giphy.com/v1/gifs/trending?'; 
        var url = trendingUrl + _apiKey;

        if (refresh == false){
          console.log('getting trendingGifs without making an http call');
          deferred.resolve(trendingGifs);
        } else {
          $http.get(url)
            .success(function(response){
              deferred.resolve(response.data);
            })
            .finally(function() {
              $rootScope.$broadcast('scroll.refreshComplete');
            });
        }
        
        return deferred.promise;
      };
    }
})();
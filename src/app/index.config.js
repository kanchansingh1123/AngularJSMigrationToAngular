(function () {
    'use strict';

    angular
      .module('designer')
      .config(config);

    /** @ngInject */
    function config($logProvider, $httpProvider) {
        // Enable log
       
    }

  /*  var interceptor = function ($log, $q) {
        return {
            request: function (config) {
                angular.element('.loaderProduct').fadeIn(500);
                return config;
            },

            response: function (result) {
                angular.element('.loaderProduct').fadeOut(500);
                return result;
            },

            responseError: function (rejection) {
                $log.log("Error with", rejection.status, "status");
                angular.element('.loaderProduct').fadeOut(500);
                return $q.reject(rejection);
            }

        }
    } */

})();

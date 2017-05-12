(function () {
    'use strict';

    angular
        .module('designer')
        .config(function ($translateProvider) {
             $translateProvider.translations('en', {
                HEADLINE: 'Hello there, This is my awesome app!',
                INTRO_TEXT: 'And it has i18n support!'
            })
            .translations('de', {
                HEADLINE: 'Hey, das ist meine großartige App!',
                INTRO_TEXT: 'Und sie untersützt mehrere Sprachen!'
            });
            $translateProvider.preferredLanguage('en');
        });

    /** @ngInject */

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

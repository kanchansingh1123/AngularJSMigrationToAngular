/*
*This is directive for content area in designer which has information of template and controller
*/



(function () {
    'use strict';

    angular.module('designer')
            .directive('aiContent', function () {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/components/content/content.html',
                        controller: 'ContentController'
                    };
                });

})();
/*
*This is directive for designer page which has information of template and controller
*/

(function () {
    'use strict';

    angular.module('designer')
            .directive('aiHeader', function () {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/components/header/header.html',
                        controller: function ($scope) {
                           
                        }
                    };
                });

})();
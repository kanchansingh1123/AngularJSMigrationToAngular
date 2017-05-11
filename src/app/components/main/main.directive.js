/*
*This is directive for designer page which has information of template and controller
*/

(function () {
    'use strict';

    angular.module('designer')
            .directive('aiDesigner', function () {
                    return {
                        restrict: 'E',
                        templateUrl: 'app/components/main/main.html',
                        controller: function ($scope) {
                           
                        }
                    };
                });

})();
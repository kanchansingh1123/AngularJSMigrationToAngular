/* Content are controller for content area in Designer and it has one listener when user changed app menu */

'use strict';

angular.module('designer')
.controller('ContentController', function ($scope, aiservice) {
	var me = $scope;
	me.employees = [];
	me.search = {};
	
	aiservice.getEmployeeList().then(function (response) {
        me.employees = response;
    });

});
/* Content are controller for content area in Designer and it has one listener when user changed app menu */

'use strict';

angular.module('designer')
	.controller('ContentController', function ($scope, aiservice,$translate) {
		var me = $scope;
		me.employees = [];
		me.search = '';
		me.monay = 1111;
		aiservice.getEmployeeList().then(function (response) {
			me.employees = response;
		});
		$scope.changeLanguage = function (key) {
			$translate.use(key);
		};
	});
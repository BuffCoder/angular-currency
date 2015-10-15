/*
 * angular-currenct v0.0.1
 * (c) 2015-2016 Brandon Krueger <brandon.c.krueger@gmail.com>
 * License: MIT
 */

angular.module('bckrueger.angular-currency', [])
.directive('angularCurrency', [function () {
	'use strict';
	
	return {
		'require': '?ngModel',
		'restrict': 'A',
		'compile': compile
	};
	
	function compile(tElem, tAttrs) {
		var isInputText = tElem.is('input:text');

		return function(scope, elem, attrs, controller) {
			elem.autoNumeric(scope.$eval(attrs.angularCurrency));
			var updateElement = function (newVal) {
				if ($.isNumeric(newVal)) {
					elem.autoNumeric('set', newVal);
				}
			};

			if (controller && isInputText) {
				scope.$watch(tAttrs.ngModel, function () {
					controller.$render();
				});

				controller.$render = function () {
					updateElement(controller.$viewValue);
				};

				elem.on('change', function () {
					scope.$apply(function () {
						controller.$setViewValue(elem.autoNumeric('get'));
					});
				});
			} else {
				if (isInputText) {
					attrs.$observe('value', function (val) {
						updateElement(val);
					});
				}
			}
		};
	}
}]);
/* global expect */
/* global it */
/* global angular */
/* global inject */
/* global describe */
/* global beforeEach */

describe('angularCurrency', function () {
    beforeEach(module('brandonckrueger.angular-currency'));

    var element;
    var scope;
    var rootScope;

    describe('With default options', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            element = angular.element('<input type="text" ng-model="currency" angular-currency="options" />');

            rootScope = $rootScope;
            rootScope.options = {};
            $compile(element)(rootScope);

            scope = angular.element(element).scope();
            scope.currency = '0';

            rootScope.$digest();
        }));

        it('0 should be 0.00', function () {
            rootScope.$apply(function () {
                scope.currency = '0';
            });
            expect(element[0].value).to.equal('0.00');
        });

        it('0.124 should become .12', function () {
            rootScope.$apply(function () {
                scope.currency = '0.124';
            });
            expect(element[0].value).to.equal('0.12');
        });

        it('0.125 should become .12', function () {
            rootScope.$apply(function () {
                scope.currency = '0.125';
            });
            expect(element[0].value).to.equal('0.13');
        });

        it('1234 should become 1,234.00', function () {
            rootScope.$apply(function () {
                scope.currency = '1234';
            });
            expect(element[0].value).to.equal('1,234.00');
        });
    });

    describe('With default aSep set', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            element = angular.element('<input type="text" ng-model="currency" angular-currency="options" />');

            rootScope = $rootScope;
            rootScope.options = { 'aSep': ' ' };
            $compile(element)(rootScope);

            scope = angular.element(element).scope();
            scope.currency = '0';

            rootScope.$digest();
        }));

        it('1234 should be 1 234.00', function () {
            rootScope.$apply(function () {
                scope.currency = '1234';
            });
            expect(element[0].value).to.equal('1 234.00');
        });
    });

    describe('With default aSign set', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            element = angular.element('<input type="text" ng-model="currency" angular-currency="options" />');

            rootScope = $rootScope;
            rootScope.options = { 'aSign': '$' };
            $compile(element)(rootScope);

            scope = angular.element(element).scope();
            scope.currency = '0';

            rootScope.$digest();
        }));

        it('1234 should be $1,234.00', function () {
            rootScope.$apply(function () {
                scope.currency = '1234';
            });
            expect(element[0].value).to.equal('$1,234.00');
        });
    });

    describe('With default mRound set', function () {
        beforeEach(inject(function ($rootScope, $compile) {
            element = angular.element('<input type="text" ng-model="currency" angular-currency="options" />');

            rootScope = $rootScope;
            rootScope.options = { 'mRound': 'D' };
            $compile(element)(rootScope);

            scope = angular.element(element).scope();
            scope.currency = '0';

            rootScope.$digest();
        }));

        it('1234.009 should be 1,234.00', function () {
            rootScope.$apply(function () {
                scope.currency = '1234.009';
            });
            expect(element[0].value).to.equal('1,234.00');
        });
    });
});
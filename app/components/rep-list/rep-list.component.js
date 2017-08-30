'use strict';

angular.module('peopleoftheUSCapital', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reps', {
            template: '<rep-list></rep-list>',
        });
    }])
    .component('repList', {
        templateUrl: 'components/rep-list/rep-list.template.html',
        controller: ['$http', function RepController($http) {

            var self = this;

            self.selectedRow = null;
            self.sortBy = 'last_name';
            self.reps = [];

            self.doThings = function(e) {
                self.selectedRow = e.row;
            };

            $http.get('data/data.json').then(function(response) {
                self.reps = response.data;
            });
        }]
    }).
    filter('repType', function() {
        return function(i) {
            return i === 'sen' ? 'Senator' : 'Representative' ;
        }
    }).
    filter('address', function() {
        return function (i) {
            return i ? i.split(';')[0] : '' ;
        }
    }).
    filter('cityStateZip', function() {
        return function(i) {
            return i ? i.split(';')[1] : '' ;
        }
    });
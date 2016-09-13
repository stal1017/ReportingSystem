'use strict';

angular.module('myApp.NeuerReport_View', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/neuerReport', {
            templateUrl: 'Angular/Views/neuer_Report_View.html',
            controller: 'NeuerReport_Ctrl'
        });
    }])

    .controller('NeuerReport_Ctrl', [function() {

        console.log("NeuerReport_Ctrl geladen");
    }]);


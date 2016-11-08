var app = angular.module('app');
app.controller (
    //name of controller
    'HomeController',

    //dependencies for controller to work
    [
        '$scope',
        //controller callbck function

        function ($scope) {
            console.log ('Home controller has been loaded.');
            $scope.title = 'Home bob';
            $scope.list =
                [
                'sarah',
                'jay',
                'sam'];
            $scope.testMethod = function () {
                console.log('test method fired');
            }

        }
    ]
);

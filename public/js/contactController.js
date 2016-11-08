var app = angular.module('app');

app.controller (
    //name of controller
    'ContactController',

    //dependencies for controller to work
    [
        '$scope',
        //controller callbck function

        function ($scope) {
            console.log ('Contact controller has been loaded.');
            $scope.title = 'Contact bob';
            $scope.list =
                [
                'Rishi',
                'Richie',
                'RishiRich'];
            $scope.testMethod = function () {
                console.log('test method fired');
            }

        }
    ]
);

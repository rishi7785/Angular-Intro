console.log(`hellow world`);

// Create the angular application
var app = angular.module(
    // This is the  name of the application / module.
    'app',

    // specifiy the dependencies or required modules needed for this application to
    // run
    //  this bracket is an array. going to list out all dependencies required
    //for module to run
    //specify that we weant to include the angulr ui
    // rotuer for page navigation
    ['ui.router']
);


// set up the app module
app.config([
    // specify the dependency objects to pull into consideration
    '$stateProvider',

    //callback  method to run for the configuration
    function ($stateProvider) {
        //our state provider controls what page or what "state" our app is in
        $stateProvider
            .state('home', {
                url: '/',
                // template: 'Hi all this is  test...'
                templateUrl: 'templates/home.html',
                controller: 'HomeController'
            });
            .state ('about', {
                url: '/about',
                template: 'This is the about test..'
            })
        ,


]);
app.config(function($provide) {
  $provide.factory('greeting', function() {
    return function(name) {
      alert("Hello, " + name);
    };
  });
});

var myFunction = function(greeting) {
  greeting('Ford Prefect');
};
$injector.invoke(myFunction);

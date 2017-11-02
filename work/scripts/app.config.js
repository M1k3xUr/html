angular.module('myListApp').config(['$locationProvider', '$routeProvider', function config($locationProvider, $routerProvider){
    $locationProvider.hasPrefix('!');

    $routerProvider.when('/list', {
        template: '<content-list></content-list>'
    }).
    when('/list/:listId', {
        template: '<drama-tv></drama-tv>'
    }).
    otherwise('/');
}]);
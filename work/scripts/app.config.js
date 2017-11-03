angular.module('myListApp').config(['$routeProvider', function config($routeProvider){
    // routing
    $routeProvider
    .when('/', {
        template: '<content-main></content-main>'
    })
    .when('/list', {
        template: '<content-list></content-list>'
    })
    .when('/list/:listId', {
        template: '<content-detail></content-detail>'
    });
}]);
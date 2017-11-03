angular.module('myListApp', [
    'ngRoute',
    'contentMain'
    // 'contentList',
    // 'contentDetail'    
]).config(['$routeProvider', function($routeProvider){
    // routing
    $routeProvider
    .when('/', {
        template: '<content-main></content-main>'
    });
    // .when('/list', {
    //     template: '<content-list></content-list>'
    // })
    // .when('/list/:listId', {
    //     template: '<content-detail></content-detail>'
    // });
}]);
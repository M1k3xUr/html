angular.module('contentDetail').component('contentDetail', {
    templateUrl: 'TBD: Detail view for <span>{{$ctrl.listId}}</span>',
    controller: ['$routeParams', 
        function ContentDetailController($routeParams){
            this.listId = $routeParams.listId;            
    }]
});
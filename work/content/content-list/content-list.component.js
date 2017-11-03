angular.module('contentList').component('contentList', {
    templateUrl: 'content/content-list/content-list.template.html',
    controller: ['$http', function TVListController($http){
        var self = this;
        this.orderProp = 'age';

        $http.get('dramalist/kdlist.json').then(function(response){
            self.kdlist = response.data;
        });
    }]
});
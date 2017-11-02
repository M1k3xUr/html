angular.module('contentList').component('contentList', {
    templateUrl: 'content/content-list/content-list.template.html',
    controller: function TVListController(){
        this.tvlist = [
            {
                title: 'Title One',
                genre: 'Comedy',
                thumburl: 'url here',
                age: 1
            }, {
                title: 'Title Two',
                genre: 'Comedy',
                thumburl: 'url here',
                age: 2
            }, {
                title: 'Title Three',
                genre: 'Comedy',
                thumburl: 'url here',
                age: 3
            }, {
                title: 'Title Four',
                genre: 'Comedy',
                thumburl: 'url here',
                age: 4
            },
        ];

        this.orderProp = 'age';
    }
});
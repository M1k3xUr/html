angular.module('contentList').component('contentList', {
    templateUrl: 'content/content-list/content-list.template.html',
    controller: function TVListController(){
        this.tvlist = [
            {
                title: 'Title One',
                genre: 'Comedy',
                thumburl: 'https://www.estrenosdoramas.net/wp-content/uploads/2017/08/Memory_Love_3-1.jpg',
                age: 1
            }, {
                title: 'Title Two',
                genre: 'Comedy',
                thumburl: 'https://www.estrenosdoramas.net/wp-content/uploads/2017/08/Memory_Love_3-1.jpg',
                age: 2
            }, {
                title: 'Title Three',
                genre: 'Comedy',
                thumburl: 'https://www.estrenosdoramas.net/wp-content/uploads/2017/08/Memory_Love_3-1.jpg',
                age: 3
            }, {
                title: 'Title Four',
                genre: 'Comedy',
                thumburl: 'https://www.estrenosdoramas.net/wp-content/uploads/2017/08/Memory_Love_3-1.jpg',
                age: 4
            },
        ];

        this.orderProp = 'age';
    }
});
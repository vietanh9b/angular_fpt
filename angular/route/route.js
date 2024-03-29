angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{ // định nghĩa tên router
        templateUrl: 'views/list.html',
        controller:ListController
    })
    .when('/product/detail/:id',{ // định nghĩa tên router
        templateUrl: 'views/detail.html',
        controller:DetailController
        
    })
})
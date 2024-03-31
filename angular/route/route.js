angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/product/list',{ // định nghĩa tên router
        templateUrl: 'views/list.html',
        controller:ListController
    })
    .when('/product/detail/:id',{ // định nghĩa tên router
        templateUrl: 'views/detail.html',
        controller:DetailController
    })
    .when('/product/add',{ // định nghĩa tên router
        templateUrl: 'views/add.html',
        controller:AddController
    })
})
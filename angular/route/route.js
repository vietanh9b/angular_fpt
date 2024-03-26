angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/trang-chu',{ // định nghĩa tên router
        templateUrl: 'views/trang-chu.html'
    })
    .when('/danh-muc',{ // định nghĩa tên router
        templateUrl: 'views/danh-muc.html'
    })
})
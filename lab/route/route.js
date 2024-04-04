angular.module('appRoute',['ngRoute']).config(function($routeProvider){
    // product
    $routeProvider.when('/product/list',{ // định nghĩa tên router
        templateUrl: 'views/listProducts.html',
        controller:ListProductController
    })
    .when('/product/add',{ // định nghĩa tên router
        templateUrl: 'views/addProduct.html',
        controller:AddProductController
    })
    .when('/product/edit/:id',{ // định nghĩa tên router
        templateUrl: 'views/editProduct.html',
        controller:EditProductController
    })
    // category
    .when('/category/list',{ // định nghĩa tên router
        templateUrl: 'views/listCategory.html',
        controller:ListCategoryController
    })
})

// 3) Bảng danh mục -> Category
//     - id: int -> Khóa tự tăng
//     - name: string -> 100 ký tự
// 4) Bảng sản phẩm -> Product
//     - id: int -> Khóa tự tăng
//     - category_id -> int -> foreign key -> category (id)
//     - title -> string (350)
//     - price: int
//     - discount: int
//     - thumbnail: string -> 500 ký tự
//     - description: longtext
//     - created_at : datetime -> tạo bảng ghi
//     - updated_at : datetime -> sửa bảng ghi đó
// viết hàm

// khai báo angularks cùng với vùng mà mình sử dụng
var app = angular.module("myApp", [])
// map hàm myFunc với infoController để render ra dữ liệu
app.controller('infoController',function($scope){
    $scope.welcome="Hello world"
    // đối tượng là gì?
    //  đối tượng là tập hợp của thuộc tính và phương thức
    //  có thể là con người, sự vật
    //  thuộc tính là các đặc điểm của đối tượng
    //  ví dụ: tên, màu sắc...
    $scope.student={
        id:"PH30859",
        name:"Việt Anh",
        born:1001
    }
    // mảng là tập hợp của nhiều đối tượng có cùng thuộc tính và phương thức
    // $scope.tên mảng = []
    // bên trong []  là các cặp ngoặc {}
    // mỗi cặp ngoặc {} hiểu đơn giản là 1 đối tượng
    // các đối tượng ngăn cách nhau bằng dấu ,
    $scope.infos=[{
        id:"PH30859",
        name:"Việt Anh",
        born:1000
    },
    {
        id:"PH30859",
        name:"Việt Anh",
        born:1001
    },
    {
        id:"PH30859",
        name:"Việt Anh",
        born:1002
    }

]
    $scope.date=(new Date()).getFullYear();
// đằng sau $scope. là biến khởi tạo để render ra view
})
window.ListController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/product"
    // khởi tạo hàm
    $scope.getProducts=function(){
        $http.get(apiUrl).then((res)=>{
            if(res.status==200){
                $scope.products=res.data
                // console.log($scope.products);
            }
        })
    }
    $scope.getProducts() //thực thi hàm

    $scope.onDetail= function(id){
        $location.path(`/product/detail/${id}`)
    }
}
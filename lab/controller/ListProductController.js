window.ListProductController=function($scope,$http,$location){
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

    $scope.onDelete=function(deleteId){
        let confirm=window.confirm('Bạn có muốn xóa không?')
        if(confirm){
            $http.delete(`${apiUrl}/${deleteId}`).then(res=>{
                console.log(res);
                if(res.status==200){
                    $scope.getProducts()
                }
            })
        }
    }
    $scope.onEdit=function(id){
        $location.path(`product/edit/${id}`)
    }
}
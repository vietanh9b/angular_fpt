window.ListCategoryController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/category"
    // khởi tạo hàm
    $scope.getCategories=function(){
        $http.get(apiUrl).then((res)=>{
            if(res.status==200){
                $scope.categories=res.data
                // console.log($scope.products);
            }
        })
    }
    $scope.getCategories() //thực thi hàm

    $scope.onDelete=function(deleteId){
        let confirm=window.confirm('Bạn có muốn xóa không?')
        if(confirm){
            $http.delete(`${apiUrl}/${deleteId}`).then(res=>{
                console.log(res);
                if(res.status==200){
                    $scope.getCategories()
                }
            })
        }
    }
    $scope.onEdit=function(id){
        $location.path(`category/edit/${id}`)
    }
}
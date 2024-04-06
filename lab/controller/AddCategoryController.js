window.AddCategoryController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/product"
    const apiCate="http://localhost:3000/category"

    // kiểm tra dữ liệu xem có hợp lệ không
    $scope.checkData={
        name:false,
        title:false,
        desc:false
    }
    $scope.onSubmit=function(){
        let flag=false
        if(!$scope.inputValue.name || !$scope.inputValue){
            $scope.checkData.name=true
            flag=true
        }

        if(!$scope.inputValue.title || !$scope.inputValue){
            $scope.checkData.title=true
            flag=true
        }

        if(!$scope.inputValue.desc || !$scope.inputValue){
            $scope.checkData.desc=true
            flag=true
        }

        if(!flag){
            // tạo ra 1 đối tượng item để thêm vào dữ liệu
            var newItem={
                ...$scope.inputValue
            }
            // khi thêm dữ liệu sử dụng phương thức post
            $http.post(apiCate,newItem).then(res=>{
                if(res.status==201){
                    $location.path('/category/list')
                }
            })
        }
    }
}
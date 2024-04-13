window.AddController=function($scope,$http,$location){
    const apiPro="http://localhost:3000/product"
    
    $scope.checkValue={
        "ma_sp":false,
        "ten_sp":false,
        "loai_sp":false,
        "gia_sp":false
    }

    $scope.onSubmit=function(){
        let flag=true
        if(!$scope.inputValue.ma_sp || !$scope.inputValue){
            $scope.checkValue.ma_sp=true
            flag=false
        }
        if(!$scope.inputValue.ten || !$scope.inputValue){
            $scope.checkValue.ten_sp=true
            flag=false
        }
        if(!$scope.inputValue.loai || !$scope.inputValue){
            $scope.checkValue.loai_sp=true
            flag=false
        }
        if(!$scope.inputValue.gia || !$scope.inputValue){
            $scope.checkValue.gia_sp=true
            flag=false
        }



        if(flag){
            if($scope.inputValue.loai==1){
                $scope.inputValue.loai="Đồ nam"
            }else{
                $scope.inputValue.loai="Đồ nữ"
            }
            const new_pro={
                ...$scope.inputValue
            }
            $http.post(apiPro,new_pro).then(res=>{
                console.log(res);
                if(res.status==201){
                    $location.path("/list-product")
                }
            })
        }
    }

}
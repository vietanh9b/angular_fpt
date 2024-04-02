window.EditController=function($scope,$http,$location,$routeParams){
    const apiUrl="http://localhost:3000/product"
    const id=$routeParams.id

    $scope.getProductInfo = function(){
        $http.get(`${apiUrl}/${id}`).then(res=>{
            if(res.status==200){
                $scope.product=res.data
                $scope.inputValue={
                    name: res.data.name,
                    price: res.data.price,
                }
            }
        }).catch(error=>{
            $scope.message=`${error.statusText} product with id ${id}`
        })
    }

    $scope.checkData={
        name:false,
        price:false
    }
    $scope.onEditForm=function(){
        // gán 1 biến để kiểm tra lỗi
        //  nếu 1 trong 2 lỗi thì chuyển thành true
        let flag=false
        console.log(1);
        if(!$scope.inputValue.name || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.name 
            //thì lập tức chuyển thành true
            $scope.checkData.name=true
            flag=true
        }

        if(!$scope.inputValue.price || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.price=true
            flag=true
        }

        if(!flag){
            // tạo ra 1 đối tượng item để thêm vào dữ liệu
            var uploadItem={
                ...$scope.inputValue
            }
            // khi thêm dữ liệu sử dụng phương thức post
            $http.put(`${apiUrl}/${id}`,uploadItem).then(res=>{
                if(res.status==201){
                    $location.path('/product/list')
                }
            })
        }
    }

    $scope.getProductInfo()
}
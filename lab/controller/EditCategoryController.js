window.EditCategoryController=function($scope,$http,$location,$routeParams){
    const apiUrl="http://localhost:3000/product"
    const apiCate="http://localhost:3000/category"
    const id=$routeParams.id
    console.log(1);
    $scope.getCategoryInfo = function(){
        $http.get(`${apiCate}/${id}`).then(res=>{
            if(res.status==200){
                $scope.product=res.data
                // console.log($scope.product);
                $scope.inputValue={
                    name: res.data.name,
                    title: res.data.title,
                    desc: res.data.desc
                }
            }
        }).catch(error=>{
            $scope.message=`${error.statusText} product with id ${id}`
        })
    }

    $scope.checkData={
        name:false,
        title:false,
        desc:false
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

        if(!$scope.inputValue.title || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.title=true
            flag=true
        }
        if(!$scope.inputValue.desc || !$scope.inputValue){
            // nếu không nhập vào inputValue hoặc inputValue.price 
            //thì lập tức chuyển thành true
            $scope.checkData.desc=true
            flag=true
        }

        if(!flag){
            // tạo ra 1 đối tượng item để thêm vào dữ liệu
            var uploadItem={
                ...$scope.inputValue
            }
            // khi thêm dữ liệu sử dụng phương thức post
            $http.put(`${apiCate}/${id}`,uploadItem).then(res=>{
                if(res.status==200){
                    $location.path('/category/list')
                }
            })
        }
    }

    $scope.getCategoryInfo()
}
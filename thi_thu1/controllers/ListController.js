window.ListController=function($scope,$http,$location){
    const apiPro="http://localhost:3000/product"

    $scope.getProducts=function(){
        $http.get(apiPro).then(res=>{
            $scope.products=res.data
        })
    }
    $scope.getProducts()
    
}
window.DetailController=function($scope,$http,$routeParams){
    const apiUrl="http://localhost:3000/product"
    const id=$routeParams.id
    $scope.getDetail=function(){
        $http.get(`${apiUrl}/${id}`).then((res)=>{
            // console.log(res);
            if(res.status==200){
                $scope.p=res.data
            }
        })
    }
    $scope.getDetail()
}
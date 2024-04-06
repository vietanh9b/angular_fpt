window.ListCategoryController=function($scope,$http,$location){
    const apiUrl="http://localhost:3000/category"
    const apiPro="http://localhost:3000/product"
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
        let confirm=window.confirm('Bạn có muốn xóa không (nếu xóa thì các sản phẩm có chứa danh mục này sẽ mất)?')
        if(confirm){
            $http.delete(`${apiUrl}/${deleteId}`)
            $http.get(`${apiPro}?cate=${deleteId}`).then(response => {
                // Lặp qua từng sản phẩm trong mảng
                response.data.forEach(product => {
                    // Gửi yêu cầu DELETE để xóa sản phẩm này
                    $http.delete(`${apiPro}/${product.id}`).then(response => {
                        console.log(`Đã xóa sản phẩm có id ${product.id}`);
                    }).catch(error => {
                        console.error(`Lỗi khi xóa sản phẩm có id ${product.id}:`, error);
                    });
                });
            }).catch(error => {
                console.error("Lỗi khi lấy danh sách sản phẩm:", error);
            });
            
            // .then(res=>{
            //     if(res.status==200){
            //         $scope.getCategories()
            //     }
            // })
        }
    }
    $scope.onEdit=function(id){
        $location.path(`category/edit/${id}`)
    }
}
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
            // $http.delete(`${apiUrl}/${deleteId}`)
            $http.delete(`${apiPro}?cate=${deleteId}`).then(response => {
                // Kiểm tra phản hồi từ server
                if (response.status === 200) {
                    // Nếu yêu cầu thành công, cập nhật danh sách categories hoặc thực hiện các hành động khác
                    console.log("Xóa thành công");
                } else {
                    // Nếu yêu cầu không thành công, xử lý lỗi
                    console.error("Xóa không thành công");
                }
            }).catch(error => {
                // Xử lý lỗi nếu có
                console.error("Lỗi khi gửi yêu cầu DELETE:", error);
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
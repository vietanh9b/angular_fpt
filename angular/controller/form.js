var app=angular.module("myApp",[])
app.controller('infoController',function($scope){
    // $scope.test=""

    $scope.input={
        list:{
            ALL:false,
            A:false,
            B:false,
            C:false
        }
    }

    $scope.categories=[
        {
            id:1,
            name:'Máy giặt'
        },
        {
            id:2,
            name:'Điều hòa'
        },
        {
            id:3,
            name:'Tivi'
        }
    ]

    $scope.submit=function(){
        const pass= $scope.pass
        const account= $scope.account
        const user={
            account:account,
            pass:pass
        }
        if (condition) {
            
        } else {
            
        }
        // console.log(user)
    }
})
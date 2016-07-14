function index($scope,$rootScope){

    $scope.language = [
      {'name':'中文','id':0,'msg':'','isactive':false},
      {'name':'英语','id':1,'msg':'','isactive':false},
      {'name':'法语','id':2,'msg':'','isactive':false}
    ]

    $scope.changeTxt = function(msg,id){ 
     // console.log($scope)  
      $scope.language[id].msg = msg
      $scope.language[id].isactive = true;
      if(!msg){
          $scope.language[id].msg = "";
          $scope.language[id].isactive =false;
      }
    }

    $scope.sub = function(){
      $scope.isShow = true;
      $scope.sArr = [];
      for(var i = 0;i<$scope.language.length;i++){
        if($scope.language[i].msg!=''){
          $scope.sArr.push($scope.language[i].name)
        }
      }

    }

    $scope.selected = '';
}
angular.module('app')
       .controller('index',index)
       
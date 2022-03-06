(function () {
    'use strict';
    
    angular.module('LunchCheck', [])

    .controller("LunchCheckController",LunchCheckController);

    LunchCheckController.inject=["$scope"];

    function LunchCheckController($scope){

        $scope.items="";

        $scope.message="";

        $scope.checkIfTooMuch = checkNumberOfItems;

        function checkNumberOfItems(){

           

            var totalItems=($scope.items).split(",");

            var totalItemsCount=totalItems.length;

            console.log(totalItems);

            console.log(totalItemsCount);

            if($scope.items.length==0){
                $scope.message="Please enter data first"; 
                $scope.messageColor={"color":"red"};
                $scope.borderColor={"border-color":"red"};  
            }
            else {
                var totalItems=($scope.items).split(",");

                totalItems=totalItems.filter((item)=>item!="");

                var totalItemsCount=totalItems.length;

                if(totalItemsCount<=3){
                    $scope.message="Enjoy!";
                }
                else{
                    $scope.message="Too much!";
                }
                $scope.messageColor={"color":"green"};
                $scope.borderColor={"border-color":"green"}; 
            }
        }

    }
    
    
    
    })();
  

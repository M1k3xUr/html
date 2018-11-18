angular.module('mose', []).controller('moseCtrl', function($scope, $http){
    //main title
    $scope.sitetitle = "Email preview";
    // view result
    $scope.setview = true; // testing view hide option is true by default
    $scope.mainview = false;    //main screen "Home" hide option is false by default
    $scope.setabout = true;    // about page is hide by default
    // showing and hiding screen views
    $scope.showhide = function (){
        // hide maine screen and show test-screen with the result
        $scope.setview = $scope.setview ? false:false;
        $scope.mainview = $scope.mainview ? true:true;
        }
    // showing home
    $scope.showhome = function (){
        $scope.mainview = $scope.mainview ? false:false;
        $scope.setview = $scope.setview ? true:true;
        $scope.setabout = $scope.setabout ? true:true;
        }
    // opening about page
    $scope.showabout = function (){
        $scope.mainview = $scope.mainview ? true:true;
        $scope.setabout = $scope.setabout ? false: false;
        $scope.setview = $scope.setview ? true:true;
    }
    }   // end of controller
);

var todoApp = angular.module('todoApp', []);
todoApp.controller('ToDoController', function($scope) {
    $scope.items = [];
    $scope.addItem = function() {
        if ($scope.todoItem && $scope.items.indexOf($scope.todoItem) == -1) {
            $scope.items.push($scope.todoItem);
            $scope.todoItem = null;
            document.getElementById('alert').style.display = 'none';
        } else if ($scope.items.indexOf($scope.todoItem) != -1) {
            document.getElementById('alert').innerHTML = $scope.todoItem + " is already on your list!";
            document.getElementById('alert').style.display = 'block';
            $scope.todoItem = null;
        }
    };
    
    $scope.removeItem = function(x) {
        console.log(x);
        console.log($scope.items.indexOf(x));
        if ($scope.items.indexOf(x) != -1) {
            $scope.items.splice($scope.items.indexOf(x), 1);
            document.getElementById('alert').innerHTML = x + " was removed from your Todo List!";
            document.getElementById('alert').style.display = 'block';
        }
    }
});
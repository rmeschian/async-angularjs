'use strict';

define([], function () {

    "use strict";

    return ['Todo', function ($scope) {
        $scope.todos = [
            {text:'learn angular', done:true},
            {text:'build an angular app', done:false}];

        $scope.numDone = function() {
            var count = 0;
            for(var i = 0; i < $scope.todos.length; i++) {
                if($scope.todos[i].done)
                    count++;
            }
            return count;
        };
        $scope.add = function(newItem) {
            $scope.todos.push({text:newItem.text, done:false});
            newItem.text = '';
        };
    }];
});


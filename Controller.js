angular.module('AngModule',[])
    .controller('SimpleController',['$scope','$http',function(scope , http) {

        http.get("https://api.github.com/users/arjuks")
            .then(function(data)
            {
                scope.info = data;
            });

    }]);


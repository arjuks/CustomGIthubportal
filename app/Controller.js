angular.module('AngModule',[])
.controller('SimpleController',['$scope','$http',function(scope , http) {


    scope.addcust = function() {
        scope.repos.push(
            {
                name:scope.addtitle ,
                description:scope.addDesc,
                created_at:scope.addDate,
                updated_at:scope.upDate,
                pushed_at:scope.pushDate,
                size:scope.size,
                language:scope.lang,
                default_branch:scope.branch,
                private:scope.private
            }
        )
    };

    scope.cancelrepo = function() {
        scope.addtitle='';
        scope.addDesc = '';
        scope.addDate = '';
        scope.upDate = '';
        scope.pushDate = '';
        scope.size = '';
        scope.lang = '';
        scope.branch = '';
        scope.private = '';
    };

    scope.addgist = function() {
        scope.gists.push(
            {
                id:scope.gistId ,
                description:scope.gistDesc,
                comments:scope.comment,
                created_at:scope.createDate,
                updated_at:scope.upgistDate
            }
        )
    };

    scope.cancelgist = function() {
        scope.gistId='';
        scope.gistDesc = '';
        scope.comment = '';
        scope.createDate = '';
        scope.upgistDate = '';
    };


    http.get("https://api.github.com/users/arjuks")
        .then(function(response)
        {
            scope.infor = response.data;
        });


    http.get("https://api.github.com/users/arjuks/repos")
        .then(function(response)
        {
            scope.repos = response.data; //for json data with array
            scope.home = response.data[0].owner.html_url;
            scope.total = response.data.length.toString();

        });

    scope.remove = function(name) {
        var i = scope.repos.indexOf(name);
        scope.repos.splice(i,1)
    }

    http.get("https://api.github.com/users/arjuks/gists")
        .then(function(response)
        {
            scope.gists = response.data; //for json data with array
            scope.tgists = response.data.length.toString();
        });

    scope.removegist = function(name) {
        var i = scope.gists.indexOf(name);
        scope.gists.splice(i,1)
    }

    scope.contrib = function(contrib) {
    http.get(contrib)
        .then(function(result)
        {
            if(result == null){
                alert('result is null');
            }
            else {
                scope.contributors = result.data.length;
                var i = 0;
                var items = [];
                for(i = 0; i < scope.contributors; i++){
                    items.push(result.data[i].login);
                    console.log(items);
                }
                alert(items);
            }
        });
    }
}]);


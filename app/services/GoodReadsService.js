/**
 * Created by Subbu on 7/6/15.
 */

(function (angular) {
    var module = angular.module("appServices");

    module.service("GoodReadsService", ["$http", "Utils", function ($http, Utils) {

        var goodReadsAPIKey = "8vhaPopC7zH9ObrCIQZnSA";

        var baseURL = "https://www.goodreads.com";
        var gitRESTUrls = {
            profile: "/user/show/"
        };

        var service = {};

        service.getUserInfo = function () {
            $http.get(baseURL + gitRESTUrls.profile,
                {
                    params: {
                        key: goodReadsAPIKey,
                        id: "25906309-subbramanian-lakshmanan"
                    }
                }).
                success(function (result, status, headers, config) {
                    Utils.logMsg("Got User data from server", result);
                }).
                error(function (data, status, headers, config) {
                    Utils.logError("Error in fetching User info", status);
                });
        };

        service.getUserInfo();

        return service;
    }]);

    /*$http.get("https://yoda.p.mashape.com/yoda?sentence=hey")
     .header("X-Mashape-Key", "IoGoZvHkvGmshFZvQOnUu8xluujBp1oGrJmjsnXzHeYNL1tAxa")
     .header("Accept", "text/plain")
     .end(function (result) {
     console.log(result.status, result.headers, result.body);
     });*/


})(angular);
angular.module('portfolioApp').service('RequestService', function($http, $state) {

    function getProjects(callback) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "data/projects.json",
            "method": "GET"
        };

        $.ajax(settings).done(callback);
    }

    return {
      getProjects: getProjects
    };


});

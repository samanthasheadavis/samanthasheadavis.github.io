angular.module('portfolioApp').controller('ProjectsController', function($state, RequestService) {
  this.message = "in ProjectsController";

  this.getProjects = function() {
    console.log('in');
    RequestService.getProjects(function(data) {
      console.log(data.projects[0].date);
    });
  };

  this.getProjects();

});

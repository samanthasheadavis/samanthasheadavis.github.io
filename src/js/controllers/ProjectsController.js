angular.module('portfolioApp').controller('ProjectsController', function($state, RequestService, $scope) {
  this.message = "in ProjectsController";

  this.getProjects = function() {
    RequestService.getProjects(function(data) {
      $scope.projects = data.projects;
      $scope.$apply();
    });
  };

  $scope.dropdown = function(project) {
    var languages = project.id;
    $("." + languages).slideToggle();
  };

  this.getProjects();
});

angular.module('portfolioApp').controller('ProjectsController', function($state, RequestService, $scope) {
  this.message = "in ProjectsController";

  this.getProjects = function() {
    RequestService.getProjects(function(data) {
      $scope.projects = data.projects;
      console.log($scope.projects);
      $scope.$apply();
    });
  };

  this.getProjects();

});

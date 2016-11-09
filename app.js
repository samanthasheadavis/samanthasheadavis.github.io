angular.module('portfolioApp', ['ui-router', 'LocalStorageModule'])

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('portfolioParent', {
    url: '/',
    abstract: 'true',
    template: '<ui-view></ui-view>'
  }).state('portfolioParent.projects', {
    url: 'projects',
    templateUrl: 'src/templates/projects.html',
    controller: 'ProjectsController as projects'
  }).state('portfolioParent.about', {
    url: 'about',
    templateUrl: 'src/templates/about.html',
    controller: 'AboutController as about'
  }).state('portfolioParent.contact', {
    url: 'contact',
    templateUrl: 'src/templates/contact.html',
    controller: 'ContactController as contact'
  });
});

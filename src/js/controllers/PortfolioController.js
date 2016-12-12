angular.module('portfolioApp').controller('PortfolioController', function($state, $location) {

  this.mobileNav = function() {
    $('.nav-container').slideToggle();
  };

});

angular.module('portfolioApp').controller('ContactController', function($state) {
    this.targetItem = function(element) {

        $('.' + element).css({
            'top': '5px',
            'left': '0px'
        });
    };
});

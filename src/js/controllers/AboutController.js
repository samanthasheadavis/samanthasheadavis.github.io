angular.module('portfolioApp').controller('AboutController', function($state) {

// set the tabs on page load to show about me first.

this.showAbout = true;
this.showSkills = false;
this.showInterests = false;


// tabswitch handles the click action on the tabs, adding the active class to the selected tab and showing the correct page

  this.tabSwitch = function(tab) {
    if (tab === 'about') {
      this.showAbout = true;
      this.showSkills = false;
      this.showInterests = false;
      $('.skills').hide();
      $('.interests').hide();
    } else if (tab === 'skills') {
      this.showSkills = true;
      this.showAbout = false;
      this.showInterests = false;
      $('.skills').show();
      $('.interests').hide();
    } else if (tab === 'interests') {
      this.showInterests = true;
      this.showAbout = false;
      this.showSkills = false;
      $('.interests').show();
      $('.skills').hide();
    }

  };
});

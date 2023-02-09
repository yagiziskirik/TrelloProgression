var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';

TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      icon: '',
      text: 'Progression',
      callback: function(t) {
        return t.popup({
          title: "Finished List",
          url: "estimate.html"
        });
      },
    }];
  },
});

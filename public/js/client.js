/* global TrelloPowerUp */

const NOTE_ICON = 'https://cdn.glitch.global/51a68053-00e4-45c7-b4b9-48ac5d72357d/note_120060.png?v=1650024072600'

window.TrelloPowerUp.initialize({
  // Start adding handlers for your capabilities here!
	'card-buttons': function(t, options) {
    // check that viewing member has write permissions on this board
    if (options.context.permissions.board !== 'write') {
      return [];
    }
    return [{
     icon: NOTE_ICON,
     text: 'Sticky Note',
     callback: function(t) {
       return t.popup({
         title: "Sticky Note",
         url: 'note.html',
       });
     }
    }];
	},
  'card-badges': function(t, options) {
    return t.get('card', 'shared', 'note')
    .then(function(note) {
      if (note) {
        return [{
          icon: NOTE_ICON,
          text: note,
          color: 'yellow'
        }]; 
      }
    });
  },
  'card-detail-badges': function(t, options) {
    return t.get('card', 'shared', 'note')
    .then(function(note) {
      if (note) {
        return [{
          title: 'Sticky Note',
          color: 'yellow',
          text: note,
          callback: function(t) {
            return t.popup({
              title: 'Sticky Note',
              url: 'note.html',
            });
          }
        }]
      }
    });
  },
});

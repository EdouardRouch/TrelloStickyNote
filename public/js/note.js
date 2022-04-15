var t = window.TrelloPowerUp.iframe();

window.note.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  
  var content = "";
  
  if (event.submitter.id == "save") {
    content = window.note_content.value;
  }
  return t.set('card', 'shared', 'note', content)
  .then(function(){
    t.closePopup();
  });
});

t.render(function () {
  t.get('card', 'shared', 'note').then(function(note){
    if (!note) {
      window.delete.setAttribute("disabled", "");
    } else  {
      window.note_content.value = note;
    }
  });
});

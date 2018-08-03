// `Classes` tab

// link our tab data into the main page:
console.log('Linking CLASSES tab');

cst1.linkTab('Classes', $div => {
  $div.append($('<h3>').append('This is the Classes tab'));
});

// `Links` tab

// link our tab data into the main page:
console.log('Linking LINKS tab');

cst1.linkTab('Links', $div => {
  $div.append($('<h3>').append('This is the Links tab'));
});

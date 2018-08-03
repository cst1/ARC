// `Professor` tab

// link our tab data into the main page:
console.log('Linking PROFESSOR tab');

cst1.linkTab('Professor', $div => {
  $div.append($('<h3>').append('This is the Professor tab'));
});

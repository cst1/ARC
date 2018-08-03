// `Links` tab

// link our tab data into the main page:
console.log('Linking LINKS tab');

cst1.linkTab('Links', $div => {
  wrapper = $('<div class="wrap"></div>');
  $div.append(wrapper);

  wrapper.append( $('<p>(Coming soon...)</p>') );


});

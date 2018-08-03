// `Professor` tab
console.log('Linking PROFESSOR tab');

cst1.linkTab('Professor', $div => {
  wrapper = $('<div class="wrap"></div>');
  $div.append(wrapper);

  pic = $(`<img src="img/simon-cst.png" alt="Simon Hunt">`);
  table = $(`<table>`);

  const addRow = (label, value) => {
    tr = $('<tr>');
    tr.append($('<td>').text(label + ':'));
    tr.append($('<td>').html(value));
    table.append(tr);
  };

  const email = `hunts@arc.losrios.edu`;
  const ahref = `<a href="mailto:${email}" target="_blank">${email}</a>`;
  const cube = cst1.nb('CMC 405 D');

  addRow('Professor', 'Simon Hunt');
  addRow('Phone', '(916) 484-8781');
  addRow('Email', ahref);
  addRow('Office', `Computer Math Center: ${cube}`);
  addRow('Office Hours', '4:30&ndash;6:00 PM, Mon&ndash;Thu');

  wrapper.append(table);
  wrapper.append(pic);
});

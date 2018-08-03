// `Classes` tab
console.log('Linking CLASSES tab');

cst1.linkTab('Classes', $div => {
  wrapper = $('<div class="wrap">');
  $div.append(wrapper);

  wrapper.append($('<h1>Fall 2018</h1>'));

  const subheader = (title, dates) => {
    const div = $('<div class="subheader">');
    div.append($('<h2>').html(title));
    div.append($('<h3>').html(dates));
    return div;
  };

  const addSection = (title, dates) => {
    const section = $('<section>');
    section.append(subheader(title, dates));
    wrapper.append(section);
    return section;
  };

  const addClassData = (section, code, crn, days) => {
    const cdata = cst1.lookup.classes[code];
    const ccode = cst1.nb(code);
    const str = cst1.nb(`${ccode} [${crn}] ${days}`, 3);
    const full = cst1.nb(`${str} &mdash; ${cdata.title}`, 2);
    const p = $('<p>').html(full);
    section.append(p);
  };

  let section = addSection('First 8 Weeks', cst1.dates('Aug 25', 'Oct 17'));
  addClassData(section, 'CISC 300', 10689, 'M/W');
  addClassData(section, 'CISC 300', 10529, 'T/Th');

  section = addSection('Second 8 Weeks', cst1.dates('Oct 18', 'Dec 14'));
  addClassData(section, 'CISC 300', 10533, 'M/W');

  section = addSection('Full Semester', cst1.dates('Aug 25', 'Dec 20'));
  addClassData(section, 'CISP 300', 10665, 'T/Th');
  addClassData(section, 'CISP 370', 10639, 'M/W');
});

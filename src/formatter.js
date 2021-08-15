const centerText = (string, totalCharNum = 80, splitAfterMax = false, cutAfterMax = false) => {
  const arrayOfRows = string.split('\n');

  const array = [];
  // Check for overhangs
  for (let i = 0; i < arrayOfRows.length; i++) {
    const singleRow = arrayOfRows[i];
    const max = singleRow.length;
    const missingChars = totalCharNum - max;
    if (splitAfterMax === true && missingChars < 0) { // one row has more chars than needed, split and add to main array
      const regexParse = new RegExp(`.{1,${totalCharNum}}`, 'g');
      const newRows = singleRow.match(regexParse);
      for (let j = 0; j < newRows.length; j++) {
        array.push(newRows[j]);
      }
    } else {
      array.push(singleRow);
    }
  }

  // let max = 0;
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].length > max) {
  //     max = array[i].length;
  //   }
  // }

  for (let i = 0; i < array.length; i++) {
    const max = array[i].length;
    const missingChars = totalCharNum - max;
    // const isEven = missingChars % 2 === 0;

    if (missingChars < 0) { // one row has more chars than needed, split and add to main array

    }

    const targetPrefix = parseInt(missingChars / 2, 10);
    const targetSufix = totalCharNum - (targetPrefix + array[i].length); // isEven ? missingChars / 2 : missingChars / 2 - 1;

    // Append prefix
    let prefix = '';
    for (let j = 0; j < targetPrefix; j++) {
      prefix += ' ';
    }

    // Append content
    const content = array[i];

    // Append sufix
    let sufix = '';
    for (let j = 0; j < targetSufix; j++) {
      sufix += ' ';
    }

    if (cutAfterMax === true) {
      array[i] = (prefix + content + sufix).substring(0, totalCharNum);
    } else {
      array[i] = (prefix + content + sufix);
    }
  }

  return array.join('\n');
};

const alignLeftText = (string, totalCharNum = 80, splitAfterMax = false, cutAfterMax = false) => {
  const arrayOfRows = string.split('\n');

  const array = [];
  // Check for overhangs
  for (let i = 0; i < arrayOfRows.length; i++) {
    const singleRow = arrayOfRows[i];
    const max = singleRow.length;
    const missingChars = totalCharNum - max;
    if (splitAfterMax === true && missingChars < 0) { // one row has more chars than needed, split and add to main array
      const regexParse = new RegExp(`.{1,${totalCharNum}}`, 'g');
      const newRows = singleRow.match(regexParse);
      for (let j = 0; j < newRows.length; j++) {
        array.push(newRows[j]);
      }
    } else {
      array.push(singleRow);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const max = array[i].length;
    const missingChars = totalCharNum - max;

    // Append prefix
    // let prefix = '';
    // for (let j = 0; j < missingChars; j++) {
    //   prefix += ' ';
    // }

    // Append content
    const content = array[i];

    // Append sufix
    let sufix = '';
    for (let j = 0; j < missingChars; j++) {
      sufix += ' ';
    }

    if (cutAfterMax === true) {
      array[i] = (content + sufix).substring(0, totalCharNum);
    } else {
      array[i] = (content + sufix);
    }
  }

  return array.join('\n');
};

const alignRightText = (string, totalCharNum = 80, splitAfterMax = false, cutAfterMax = false) => {
  const arrayOfRows = string.split('\n');

  const array = [];
  // Check for overhangs
  for (let i = 0; i < arrayOfRows.length; i++) {
    const singleRow = arrayOfRows[i];
    const max = singleRow.length;
    const missingChars = totalCharNum - max;
    if (splitAfterMax === true && missingChars < 0) { // one row has more chars than needed, split and add to main array
      const regexParse = new RegExp(`.{1,${totalCharNum}}`, 'g');
      const newRows = singleRow.match(regexParse);
      for (let j = 0; j < newRows.length; j++) {
        array.push(newRows[j]);
      }
    } else {
      array.push(singleRow);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const max = array[i].length;
    const missingChars = totalCharNum - max;

    // Append prefix
    let prefix = '';
    for (let j = 0; j < missingChars; j++) {
      prefix += ' ';
    }

    // Append content
    const content = array[i];

    // Append sufix
    // let sufix = '';
    // for (let j = 0; j < missingChars; j++) {
    //   sufix += ' ';
    // }

    if (cutAfterMax === true) {
      array[i] = (prefix + content).substring(0, totalCharNum);
    } else {
      array[i] = (prefix + content);
    }
  }

  return array.join('\n');
};

module.exports = {
  alignLeftText,
  alignRightText,
  centerText,
};

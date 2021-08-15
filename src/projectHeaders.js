const _ = require('lodash');
const figlet = require('figlet');

const paddFigletTextWithSpacesSuchThatResultContainsNCharsInTotal = (titleStr, figletSettings, limit = 80) => {
  const getLengthOfSingleRow = newString => (figlet.textSync(newString, {
      ...figletSettings,
    })).split('\n')[0].length;

  let newString = `${titleStr}`;

  let addSpaceToTheEnd = true;
  for (let i = getLengthOfSingleRow(newString); i < limit; i = getLengthOfSingleRow(newString)) {
    if (addSpaceToTheEnd) {
      newString = `${newString} `;
    } else {
      newString = ` ${newString}`;
    }
    addSpaceToTheEnd = !addSpaceToTheEnd;
  }
  return newString;
};

const drawProjectHeaders = (pckg) => {
  let textResult = `${Array(80 + 1).join(' ').yellow.bgBlue}\n`; // For first header
  // --------------------------------------------------------------------------------
  const projectHeaders = _.get(pckg, 'descriptionHeaders', []);
  for (let i = 0; i < projectHeaders.length; i++) {
    const projectHeader = projectHeaders[i];
    const headerFigletOptions = projectHeader.figletOptions;
    const solutionHeader = paddFigletTextWithSpacesSuchThatResultContainsNCharsInTotal(projectHeader.value, headerFigletOptions);
    textResult += `${figlet.textSync(solutionHeader, headerFigletOptions).white.bgBlue}\n`;
  }
  // --------------------------------------------------------------------------------
  textResult += `${Array(80 + 1).join(' ').white.bgBlue}\n`; // For last header
  return textResult;
};

module.exports = {
  drawProjectHeaders,
};

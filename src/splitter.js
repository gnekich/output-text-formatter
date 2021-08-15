const _ = require('lodash');

const splitter = (str, _totalCharNum = 80) => {
  if (typeof str !== 'string') {
    return '';
  }
  let totalCharNum = 80;
  if (typeof _totalCharNum === 'number') {
    totalCharNum = _totalCharNum;
  }
  const regexParse = new RegExp(`.{1,${totalCharNum}}`, 'g');

  if (_.get(process.env, 'AWS_CLOUDWATCH_OUTPUT', 'false').toLowerCase() === 'true') {
    return str.match(regexParse).join('');
  }
  return str.match(regexParse).join('\n');
};

module.exports = {
  splitter,
};

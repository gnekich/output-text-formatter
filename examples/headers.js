const {
  drawProjectHeaders,
} = require('./../src/index');

const colors = require('colors');
const newHeader = drawProjectHeaders({"descriptionHeaders":[{"value":"Microservice","figletOptions":{"font":"Big","horizontalLayout":"default","verticalLayout":"default"}},{"value":"Backend","figletOptions":{"font":"Small","horizontalLayout":"default","verticalLayout":"default"}}]});
console.log(newHeader);

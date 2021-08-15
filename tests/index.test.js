const {
  centerText,
  splitter,
  drawProjectHeaders,
} = require('./../src/index');

const assert = require('assert');
const colors = require('colors');

const result1 = `                        Something... bla bla, Heh Nice!                         `;

const result2 = `Test test test test test test test test test test test test test test test test 
test test test test test test test test test test test test test test test test`;

const expectedHeader = `                                                                                
             __  __ _                                    _                      
            |  \\/  (_)                                  (_)                     
            | \\  / |_  ___ _ __ ___  ___  ___ _ ____   ___  ___ ___             
            | |\\/| | |/ __| '__/ _ \\/ __|/ _ \\ '__\\ \\ / / |/ __/ _ \\            
            | |  | | | (__| | | (_) \\__ \\  __/ |   \\ V /| | (_|  __/            
            |_|  |_|_|\\___|_|  \\___/|___/\\___|_|    \\_/ |_|\\___\\___|            
                                                                                
                                                                                
                         ___          _               _                         
                        | _ ) __ _ __| |_____ _ _  __| |                        
                        | _ \\/ _\` / _| / / -_) ' \\/ _\` |                        
                        |___/\\__,_\\__|_\\_\\___|_||_\\__,_|                        
                                                                                
                                                                                
`;

describe('Validate output', function() {

  it('centerText', function(done) {
    assert.strictEqual(centerText(splitter(`Something... bla bla, Heh Nice!`)), result1);
    done();
  })

  it('splitter', function(done) {
    assert.strictEqual(splitter(`Test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test`), result2);
    done();
  })

});

describe('Draw headers', function() {

  it('Drawing header', function(done) {
    const newHeader = drawProjectHeaders({"descriptionHeaders":[{"value":"Microservice","figletOptions":{"font":"Big","horizontalLayout":"default","verticalLayout":"default"}},{"value":"Backend","figletOptions":{"font":"Small","horizontalLayout":"default","verticalLayout":"default"}}]});
    assert.strictEqual(newHeader, expectedHeader);
    done();
  })

});
const request = require('request');
const program = require('commander');

const API_URI = 'http://www.mocky.io/v2/5185415ba171ea3a00704eed';
 
function somethingHappened (thing) {
    const options = {
        uri: API_URI,
        method: 'POST',
        json: thing
    }

    request(options, (err, res, body) => {
        console.log(body); 
    });
}

program
  .version('1.0.0')
  .option('-t, --type [event]', 'Run the event [event]', 'ping')
  .parse(process.argv);
 
somethingHappened(program.type)
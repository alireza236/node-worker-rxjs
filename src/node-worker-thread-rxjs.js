const { workerData, parentPort } = require('worker_threads');

const fetch = require('node-fetch');

parentPort.postMessage(`starting heavy duty work from process ${process.pid} that will take ${workerData}s to complete`);

timeLimit = workerData;
timer = 0;
 
function initialize() {
    // Setting URL and headers for request
 
    setTimeout((count) => {
          if(count === timeLimit){
          	parentPort.postMessage('done heavy duty work');
          }

           // Return new promise 
    return new Promise(function(resolve, reject) {
    	// Do async job
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(json => console.log(json));

        resolve()
     })
    }, 1000 * timer, timer);
};

module.exports = {
  initialize:initialize()
}


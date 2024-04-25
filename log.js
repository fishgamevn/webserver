
const http = require('http');
let logsMessage = [];

setInterval(() => {
  if (logsMessage.length > 0 ) {
    let mss = logsMessage.pop();
    const req = http.request({
      hostname: '171.244.143.232', port: 8080, path: '/submit', method: 'POST',
      headers: {'Content-Type': 'application/json'},
    }, res => {});    
    req.write(JSON.stringify({msg: mss}));
    req.end();
  }
}, 100);


logInfo: (...message) => {
    logsMessage.push(JSON.stringify(message));
    if (seft.canLog("info")) logger.info(...message);
},

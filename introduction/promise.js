const EventEmitter = require('events');
const emitter = new EventEmitter();

function getNumber() {
    let randTime = Math.floor(Math.random() * 3000 + 1000);
    let randError = Math.floor(Math.random() * 3 + 1);
    emitter.emit('randTime', randTime); // va déclancher un événement
    emitter.emit('randError', ! (randError > 1), randError);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (randError > 1) ? resolve([1, 2, 3, 4, 5]): reject(new Error('Server Error'));
        }, randTime)
    })
}

emitter.on('randError', (error, number) => {
    console.log('Error: %s (number %d)', error, number)
});

getNumber().then(console.log).catch(console.log);
const { createLogger } = require('./logger');
const { appName, projectSettings } = require('./config');

console.log('scheduler.js запущен!');

const logger = createLogger(appName);

const runPeriodicTask = (name, interval, task) => {
    return setInterval(task, interval, name);
}

runPeriodicTask('running', projectSettings.interval, logger);
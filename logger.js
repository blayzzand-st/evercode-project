const { appName } = require('./config');

const logFormattedMsg = (text) => console.log(`[${appName}] ${text}`);

module.exports = {
    logFormattedMsg
}
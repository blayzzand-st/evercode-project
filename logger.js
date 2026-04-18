exports.createLogger = (appName) => {
    return (text) => {
        console.log(`[${appName}] ${text}`);
    };
};
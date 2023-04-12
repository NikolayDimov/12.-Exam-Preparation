function parseError() {
    return error.message.split('\n');
}

module.exports = {
    parseError
};
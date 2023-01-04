const path = require('path');

let mockFile = (schema) => {
    return require(path.join(__dirname, 'mock/', schema));
};

module.exports = () => {
    return {
        question: mockFile('question.js')
    };
};
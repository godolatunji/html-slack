const TurndownService = require('turndown');
const rules = require('./rules');

const turndownService = new TurndownService();

for(const prop in rules) {
    if(rules.hasOwnProperty(prop)) {
        turndownService.addRule(`${prop}`, rules[prop]);
    }
}

const convert = (htmlString) => {
    return turndownService.turndown(htmlString);
}

module.exports = convert;

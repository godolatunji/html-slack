
module.exports = {
    strong: {
        filter: ['strong', 'b'],
        replacement: function(content) {
            return  '*' + content + '*';
        }
     },
     
     header: {
         filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
         replacement: function(content) {
             let line = '';
             for(let i = 1; i <= content.length; i++) {
                 line += '=';
             }
             return content.trim() + '\n' + line + '\n';
         }
     },

     strikeThrough: {
        filter: ['del', 's', 'strike'],
        replacement: function (content) {
            return '~' + content + '~';
          }
     },

    paragraph: {
        filter: ['div', 'p', 'section'],
        replacement: function(content) {
            return `\n` + content + '\n';
        }
    },

    hightlight: {
        filter: ['mark', 'q'],
        replacement: function(content) {
            return  '`' + content + '`';
        }
    },

    italic: {
        filter: ['i', 'em'],
        replacement: function(content) {
            return  '_' + content + '_';
        }
    },

    breakLine: {
        filter: ['br'],
        replacement: function(content) {
            return  '\n';
        }
    },

    blockquote: {
        filter: ['blockquote'],
        replacement: function(content) {
            const arr = content.split('\n');
            let result = '';
            for(let a of arr) {
                result += '>' + a + '\n';
            }
            return result;
        }
    },

    preformatted: {
        filter: ['pre'],
        replacement: function(content) {
            return  '```' + '\n' +  content + '\n' + '```';
        }
    },

    table: {
        filter: ['table', 'thead', 'tr'],
        replacement: function(content) {
            return content + '\n';
        }
    },

    tableHeader: {
        filter: ['th'],
        replacement: function(content) {
            let result = '| ' + '*' + content + '*' + ' |';
            let line = '';
            for(let i = 1; i <= result.length; i++) {
                line += '_';
            }
            return result + '\n' + line;
        }
    },

    tableRow: {
        filter: ['td'],
        replacement: function(content) {
            let result = '| ' + content + ' |';
            let line = '';
            for(let i = 1; i <= result.length; i++) {
                line += '_';
            }
            return result + '\n' + line;
        }
    },
}
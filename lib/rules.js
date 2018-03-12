
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
             return '\n' + content.trim() + '\n' + line + '\n';
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

    span: {
        filter: ['span'],
        replacement: function(content, node, options) {
            if(node.getAttribute('style')) 
                content = getSpanValue(content, node);
            
            return content;
        }
    },
    underline: {
        filter: ['u'],
        replacement: function(content) {
            return  '`_' + content + '_`';
        }
    }
};

function getSpanValue(content, node) {
    const style = node.getAttribute('style').split(':');
    switch(style[0]){
        case 'text-decoration':
        case 'text-decoration-line':
            for(let v of style[1].split(' ')){
                if(v === 'line-through')
                    content = '~' + content + '~';
                if(v === 'underline')
                    content = '`_' + content + '_`';
            }
    }
    return content;
}
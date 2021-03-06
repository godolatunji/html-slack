const converter = require('./converter');
const {
    h1,
    strike,
    blockquote,
    page,
    table,
    strong,
    p,
    ul,
    ol,
    pre,
    highlight,
    anotherPage,
} = require('./htmlStrings');

test('It should convert h1 tag', () => {
    const exp = 
    `Lorem ipsum dolor sit amet consectetuer adipiscing elit
=======================================================`;
    expect(converter(h1)).toBe(exp);
});

test('It should convert strong or bold tag', () => {
    expect(converter(strong)).toBe('*This is a strong tag**bold text*')
});

test('It should convert p, div, section', () => {
    const exp = `This ia a paragragh`;
    expect(converter(p)).toBe(exp);
});

test('It Should convert a del tag', () => {
    const exp = '~Aenean commodo ligula eget dolor aenean massa~';
    expect(converter(strike)).toBe(exp);
});

test('It should convert a blockquote', () => {
    const exp = `>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, dictum felis eu pede mollis pretium.`;
    expect(converter(blockquote)).toBe(exp);
});

test('It should convert a table' , () => {
    const res = converter(table);
    // console.log(res);
});

test('It should convert an unordered list', () => {
    const exp = 
`*   Lorem ipsum dolor sit amet, .
*   Cum sociis natoque penatibus .
*   Nulla consequat massa quis enim.
*   In enim justo, rhoncus ut, imperdiet a.`;
    expect(converter(ul)).toBe(exp);
});

test('It should convert an ordered list', () => {
    const exp = 
`1.  Lorem ipsum dolor sit amet, .
2.  Cum sociis natoque penatibus .
3.  Nulla consequat massa quis enim.
4.  In enim justo, rhoncus ut, imperdiet a.`; 
    expect(converter(ol)).toBe(exp);
});

test('It should convert a preformatted tag', () => {
    const exp = 
`\`\`\`
    function printHelloWorld() {
        return 'Hello' + ' ' + 'world';
    }

\`\`\``;
    expect(converter(pre)).toBe(exp);
});

test('It should highlight a text', () => {
    expect(converter(highlight)).toBe('`a mark tag``a q tag`');
});

test('It should convert i or em tag', () => {
    const data = '<i>italic tag</i><em>emphasis tag</em>';
    expect(converter(data)).toBe('_italic tag__emphasis tag_');
});

test('It should convert a breakline', () => {
    const data = 'first text<br />another text';
    const exp = `first text
another text`;
expect(converter(data)).toBe(exp);
})

test('It should convert page with multiple tags', () => {
    const res = converter(page);
    expect(res).toContain('*Lorem ipsum dolor sit amet*');
    expect(res).toContain('_Aenean_');
    expect(res).toContain('_Lorem ipsum dolor sit amet_');
})

test('It should convert a span with "text-decoraton: line-through" attribute', () => {
    const data = '<span style="text-decoration: line-through">this is a deleted text</span>'
    const res = converter(data);
    expect(res).toBe('~this is a deleted text~');
})

test('It should convert a span with "text-decoraton: underline" attribute', () => {
    const data = '<span style="text-decoration: underline">this is a underlined text</span>'
    const res = converter(data);
    expect(res).toBe('`_this is a underlined text_`');
})

test('It should convert a u tag', () => {
    const data = '<u>this is a underlined text</u>'
    const res = converter(data);
    expect(res).toBe('`_this is a underlined text_`');
})

test('It should convert ordinary span', () => {
    expect(converter('<span>Hello</span>')).toBe('Hello');
})

test('It should convert a another page', () => {
    const res = converter(anotherPage);
    // console.log(res);
})
# html-slack
This package converts html to slack markdown with support for more html tags and conforming them to slack standard markdown.

#How to use
```js
    const h2s = require("html-slack");

    //  a header tag
    //  ============
    console.log(h2s("<h1>a header tag"));

    //  *a strong text*
    console.log(h2s("<strong>a strong text</strong>"))
```

# html tags support
The following tags are supported
1. All header tags - they are underlined on conversion
2. div and p tags 
3. del, s  and strike tags - converted using ~text~ format
4. mark and q tags - converted using \`text\` format
5. the i and em tags - converted using \_text\_ format
6. the blockquote and pre tags.
7. the ol and ul tags
8. u tag

# To-do
- conversion of table

# Extra
The converter also takes care of element with `text-decoration` style attribute.
For example:
```js
//  ~this is a deleted text~
    console.log(h2s('<span style="text-decoration: line-through">this is a deleted text</span>'));

// `_this is an underlined text_`
    console.log(h2s('<span style="text-decoration: underline">this is a underlined text</span>'));
```

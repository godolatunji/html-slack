const h1 = '<h1>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h1>';

const strike = '<del>Aenean commodo ligula eget dolor aenean massa</del>';

const ul = `
<ul>
  <li>Lorem ipsum dolor sit amet, .</li>
  <li>Cum sociis natoque penatibus .</li>
  <li>Nulla consequat massa quis enim. </li>
  <li>In enim justo, rhoncus ut, imperdiet a.</li>
</ul>`;

const ol = `
<ol>
  <li>Lorem ipsum dolor sit amet, .</li>
  <li>Cum sociis natoque penatibus .</li>
  <li>Nulla consequat massa quis enim. </li>
  <li>In enim justo, rhoncus ut, imperdiet a.</li>
</ol>`;

const blockquote = `
<blockquote>
    Lorem ipsum dolor sit amet, consectetuer 
    adipiscing elit. Aenean commodo ligula eget dolor. 
    Aenean massa. Cum sociis 
    natoque penatibus et magnis dis parturient montes,
    dictum felis eu pede mollis pretium.
</blockquote>`;

const table = `
<table class="data">
  <tr>
    <th>Entry Header 1</th>
    <th>Entry Header 2</th>
    <th>Entry Header 3</th>
    <th>Entry Header 4</th>
  </tr>
  <tr>
    <td>Entry First Line 1</td>
    <td>Entry First Line 2</td>
    <td>Entry First Line 3</td>
    <td>Entry First Line 4</td>
  </tr>
  <tr>
    <td>Entry Line 1</td>
    <td>Entry Line 2</td>
    <td>Entry Line 3</td>
    <td>Entry Line 4</td>
  </tr>
  <tr>
    <td>Entry Last Line 1</td>
    <td>Entry Last Line 2</td>
    <td>Entry Last Line 3</td>
    <td>Entry Last Line 4</td>
  </tr>
</table>`;

const pre = `
<pre>
    function printHelloWorld() {
        return 'Hello' + ' ' + 'world';
    }
</pre>    
`;

const strong = '<strong>This is a strong tag</strong><b>bold text</b>';

const p = `
<div>
    <p>This ia a paragragh</p>
</div>`;

const highlight = '<mark>a mark tag</mark><q>a q tag</q>';

const page = `
<p>&nbsp;</p>
<p style="text-align: center; font-size: 15px;"><img src="../images/glyph-tinymce@2x.png" alt="TinyMCE" width="77" height="70" /></p>
<p style="text-align: center;">This demo includes our most popular Premium Plugins: <a href="../powerpaste">PowerPaste</a>, <a href="../enhanced-media-embed/">Enhanced Media Embed</a>, <a href="../advanced-code-editor/">Advanced Code Editor</a>, <a href="../link-checker/">Link Checker</a>, <a href="../accessibility-checker">Accessibility Checker</a>, <a href="../spell-checker-pro">Spell Checker Pro</a> &amp; <a href="http://www.moxiemanager.com">MoxieManager</a>.</p>
<p style="text-align: center;">TinyMCE is the world's #1 web-based HTML WYSIWYG editor control.</p>
<p style="text-align: center;">Used on more than 100 million websites and with upward of 70% market share*, <br />TinyMCE is the first and only choice for your next project.</p>
<p style="text-align: center;"><em>TinyMCE enables you to convert HTML textarea fields or other HTML elements to editor instances.</em><br />* Market share stats, Wappalyzer, 2017.</p>
<p>&nbsp;</p>
`

module.exports = {
    h1,
    strike,
    ul,
    ol,
    blockquote,
    page,
    table,
    strong,
    p,
    pre,
    highlight,
};
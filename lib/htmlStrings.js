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
<h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>
<p><strong>Lorem ipsum dolor sit amet</strong>, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa 
<strong>strong</strong>. Cum sociis natoque penatibus 
et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque 
eu, pretium quis, sem. Nulla consequat massa quis 
enim. Donec pede justo, fringilla vel, aliquet nec, 
vulputate eget, arcu. In enim justo, rhoncus ut, 
imperdiet a, venenatis vitae, justo. Nullam dictum 
felis eu pede <a class="external ext" href="#">link</a> 
mollis pretium. Integer tincidunt. Cras dapibus. 
Vivamus elementum semper nisi. <em>Aenean</em> vulputate 
eleifend tellus. Aenean leo ligula, porttitor eu, 
consequat vitae, eleifend ac, enim. Aliquam lorem ante, 
dapibus in, viverra quis, feugiat a, tellus. Phasellus 
viverra nulla ut metus varius laoreet. Quisque rutrum. 
Aenean imperdiet. Etiam ultricies nisi vel augue. 
Curabitur ullamcorper ultricies nisi.</p>
<h1>Lorem ipsum dolor sit amet consectetuer adipiscing 
elit</h1>
<h2>Aenean commodo ligula eget dolor aenean massa</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<h2>Aenean commodo ligula eget dolor aenean massa</h2>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<ul>
  <li>Lorem ipsum dolor sit amet consectetuer.</li>
  <li>Aenean commodo ligula eget dolor.</li>
  <li>Aenean massa cum sociis natoque penatibus.</li>
</ul>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>

<p>Lorem ipsum dolor sit amet, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>

<p><i>Lorem ipsum dolor sit amet</i>, consectetuer adipiscing 
elit. Aenean commodo ligula eget dolor. Aenean massa. 
Cum sociis natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Donec quam felis, 
ultricies nec, pellentesque eu, pretium quis, sem.</p>
<ol>
  <li>Lorem ipsum dolor sit amet consectetuer.</li>
  <li>Aenean commodo ligula eget dolor.</li>
  <li>Aenean massa cum sociis natoque penatibus.</li>
</ol>
`;

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
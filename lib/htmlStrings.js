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
const anotherPage = `
<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h1>This is an header</h1>
<p><strong>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</strong>, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. <em>The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc</em>.</p>
<p>&nbsp;</p>
<p><code>this a code a very long code. thaink you.</code></p>
<ul>
<li><code></code>an unodered list item</li>
<li>another item here</li>
<li>another one</li>
</ul>
<p><span style="text-decoration: line-through;">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,</span> consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
<p>&nbsp;</p>
<ol>
<li>this is an ordered list</li>
<li>another item</li>
<li>another one</li>
</ol>
</body>
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
    anotherPage,
};
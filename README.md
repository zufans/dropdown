## README
<p>This is a Navigation dropdown component for react application.</p>

### Installtion
<code>npm install @zufans/dropdown</code>
<br>

### Implementation
<code>import QuickNav from "@zufans/dropdown"</code>
<br>

<table>
    <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>title</td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>itemProperty</td>
        <td>Object</td>
        <td>This prop is a key to value object. It should hold three propertys called lable (stirng) onClick (function) and href (stirng. The onClick and href propertys are optional. However the lable propertys is required </td>
    </tr>
</table>

<h3>Example</h3>

<code>
function Drop(){<br>
&nbsp; const navItemsProps = [<br>
&nbsp;&nbsp;    {lable:"Home", onClick:()=> console.log('home'), href: "https://www.google.com"},<br>
&nbsp;&nbsp;    {lable:"About", onClick:()=> console.log('home'), href: "www.yahoo.com" },<br>
&nbsp;&nbsp;    {lable:"Contact", onClick:()=> console.log('home'), href: "https://reactjs.org/"}<br>
]<br>
</code>
<code>
  return(
     <br>&nbsp; &ltDropdown itemProperty={navItemsProps} title="Title"/><br>
&nbsp;  )<br>
}
<code>

</code>

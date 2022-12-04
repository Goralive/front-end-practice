# Learning Notes

# Section one HTML

`b` - bold text\
`p` - paragraph\
`h1...h2` - heading. h1 using only onse on the page. Add structure to the page
can be only one head and one body\
`ol/ul` - order list un order lists. Can be nested list\
`li` - elements in the lists\
`a` - anchor element. Should be at the end of the element. Can be links to your doc\
`img` - not have closing tags src and alt are important. Can be store as in internet or on disk.

`<!-- -->` - comments :-)

`hr` - line break\
`br` - line break element\
`sup` - superscript\
`sub` - subscript chemical formulas\
`<` - this is reserved HTML. Should used entitycodes name or number

### Semantic markup

`main` `header` `section` `nav` `footer` - behaves like div. Using for crawels.
Using for screen readers. More readable for developers.\
`main` - main content of the page\
`nav` - navigation link\
`section` - stadelone section. mb for different paragraphs.\
`article` - block articles. Reusable. Should be heading in it.\
`aside` - color boxes. Bonus content.\
`time` - machine readable time code\
`figure` - ilustrations

### Tables structure

`table` - table of the content\
`td` - single cell of the table that contains data.\
`tr` - table row to group data in rows.\
`th` - define a header of the column.\
`rowspan` - fill the number of cells in the table.\
`colspan` - create two columns\
`thead` - multiple rows can be in the the headers can be wrap.\
`tbody` - body of the table.\
`tfooter` - for overall calculations can be used

### Forms

`form` - when submitting the form http request will be send.\
`input` - no closing tags. A lot of different types.\
`placeholder` - placeholder text for input fields.\
`button` - better to specify in a form.\
`name` - for forms is crusual if you want to send the parameters in http requests.\
`value` - need for radio buttons to submit correct data.\
`select` work together with `option` \
`required` - attribute for validations.

# CSS

A lot of different properties. CSS is cascade language. So the order valeus. Read from top to down
Specificity: more specific selectors wins! ID > Class > element
`color` - represet the color of the text\
`h2` takes all the space for the background\
`;` - end of line\
`text-align`- where the text will be placed. Alight against the size of the box\
`font-weight` - 400 - normal font, 700 - usually bold\
`text-decoration` - controls appearance of decorative lines on text `underline`,
`dotted` ...\
`line-height` - controls the line height\
`letter-spacing` - control the spacing between the letters\
`font-size` - relative `em rem vh vw %` absolute `px pt cm in mm`

### CSS units

#### Relative units

`%` - 50% = half of the size. Half of the with of the parent\
`em` - 2em = 2 \* font size of the parrent element. If using with elements (like margin) it's takeing the size of the element itself. Note: not use in nested elements.\
`rem` - get element size from the root element. Get size from `html` element.

### Selectors

`*` - select everything\
`button` - select every button\
adjacent selector - select after another `h2 + button`\
direct chind - `h2 > button` one level down\
attribute selector - inside attribute

### Pseudo classes

`:hover` - differnet representation on hover\
`:active` - click on buttons\
`:checked` - checked checkbox\
`nth-of-type()` - 3 only the third one element. 3n each 3d element

### Pseudo element

`::first-letter` - set the first letter of the element\
`::first-line` - select the line\
`::selection` - can be done on the text. Select backgound color\
`::after` - add after element the value\
`::before` - add after element value if use `content` or you can adjust some values

Not used inline styles and important\
color can be inherited.

## Box Model

Everething in css is a box.\
Top | Right | Bottom | Left \
`margin` - add outside spacing on the border of the box.\
`padding` - space between the content and the border element. Green stuff in dev tools. You can set padding\
`border` - width, color, style. Box-sizing can be the same size as the box `border-box`\
`border` - width | style | color\
`border-radius` - make borders rounded

### Display properties

`inline` - get not all the width of the entire line. Example is span\
`block` - get the width of the entire line. Example is h1\
`inline-block` - behaves like inline element except Width and height are respected\
`none` - hide element

### Opacity + Alpha channels

`opacity` - make the element not visible. Transparent\
 `alpha channel` - work only on one property. Other elements are not affected.

### Position

Property sets how an element is positioned in a document. Top, right, bottom, left\
`static` - element position with respect to position. Can't influence position\
`relative` - position the element relative to another elements\
`absolute` - element is removed from normal document flow. No space is created for the element in the page layout. Position can be taken from parent\
`fixed` - the element will stay at the same place. Like absolute positioning but doesn't affects by parent\
`sticky` - position element. Element will go down along with container.

### Transitions

`transition` - looks fun. Transition properties in defined order. You can specify property name, duration, timing function, delay\
`transition-timing-function` - `easy-in`

### Flexbox

Flexbox - distribute content in a container. flexible elements
In flex bos there is two axis main and cross.
`flex-direction` - default axess diraction is row. From left to right.
`justify-content` - move elements in container (start,end,center, space-between, around)
`flex-wrap` - elements can align on multiple lines if set value to wrap
`align-items` - working with y horizonal

### Transform
`transform` - rotate. You can rotate elements. `transform-origin` from where to start transform\
A lot of stuff for transformation. `Scale` can be scale on x and y\
`translate` - move thing around the page. Can be influence only X or Y\
Transformation apply for all content elements\

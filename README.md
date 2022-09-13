# Learning Notes
In progress 70
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
`required` - attribute for validations.\

# CSS
A lot of different properties.
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

### Selectors
`*` - select everything\
`button` - select every button\
adjacent selector - select after another `h2 + button`\
direct chind - `h2 > button` one level down\
attribute selector - inside attribute\

### Pseudo classes
`:hover` - differnet representation on hover\
`:active` - click on buttons\
`:checked` - checked checkbox\
`nth-of-type()` - 3 only the third one element. 3n each 3d element

### Pseudo element

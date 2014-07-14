// Get and Compile My Template
var template = Handlebars.compile($('.titleTemplate').html());
 
// Pass the `data` to my compiled template to render it
var rendered = template(data);
 
// Choose a spot on my page and dump my rendered template HTML into it.
$('.titleList').html(rendered);
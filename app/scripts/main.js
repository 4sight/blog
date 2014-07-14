// Get and compile my template
var template = Handlebars.compile($('.titleTemplate').html());
 
// Pass the `data` to my compiled template to render it
var rendered = template(data);
 
// Choose a spot on my page and dump my rendered template HTML into it.
$('.titleList').html(rendered);

// Function to execute when user clicks the 'Submit' button
function submit() {
	new Post({
		title: document.getElementById('title').submit()
	})
};

posts.add(post).save();

$('titleTemplate').append(post.escape('title'));
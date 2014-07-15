// Get and compile my template
var template = Handlebars.compile($('.titleTemplate').html());
 
// Pass the 'data' to my compiled template to render it
var rendered = template(posts);
 
// Choose a spot on my page and dump my rendered template HTML into it.
$('.titleList').html(rendered);

var posts = new Blog();

// Function to execute when user clicks the 'Submit' button
$('#postButton').click(function(event){
	event.preventDefault();
	console.log($('#title').val());
	var post = new Post({
		title: $('#title').val(),
  });
  posts.add(post).save();
  $('.titleList').append(post.escape('title'));
  $('.contentList').append(post.escape('tile'));
  var data = {title: post.title}
	var html = template(data);
});
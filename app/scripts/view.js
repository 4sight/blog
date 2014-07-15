var Post = Backbone.View.extend({
	el: '#blogWrap',

	initialize: function (){
		this.render();
		this.collection.on('change', this.render, this);
		this.collection.on('destroy', this.render, this);
	},

events: {
	'submit #createPost': 'create_post',
	'click h1.title a': 'single_view'
},

render: function(){
	// Get and compile my template
	var template = Handlebars.compile($('#postTemplate').html());
	var rendered = template({posts: this.collection.toJSON()});
	// Choose a spot on my page and dump my rendered template HTML into it.
	this.$el.find('#postList').html(rendered);
	this.$el.find('.postEntryForm').show();
	return this;
},

// Function to execute when user clicks the 'Submit' button
create_post:function(e){
	e.preventDefault();
	var temp_post,
		title = $('.postTitle').val(),
		content = $('.postContent').val(),
		author = $('.postAuthor').val(),
		tags = $('.postTags').val(),

	temp_post = new Post({
		title: title,
		author: author,
		content: content,
		tags: tags.replace(/\s+/g, '').split(','),
		status: 'Published',
		date: new Date().toJSON().slice(0,10)
	});

	all_post.add(temp_post).save();

	this.$el.find('#createPost').trigger('reset');
},
});
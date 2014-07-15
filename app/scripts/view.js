var PostView = Backbone.View.extend({
	el: '#blog',

	initialize: function (){
		this.render();
		this.collection.on('change', this.render, this);
		this.collection.on('destroy', this.render, this);
	},

	events: {
		'submit #data': 'createPost'
		// 'click h1.title a': 'single_view'
	},

	render: function(){
		// Get and compile my template
		var template = Handlebars.compile($('#postTemplate').html());
		var rendered = template({allPosts: this.collection.toJSON()});
		// Choose a spot on my page and dump my rendered template HTML into it.
		this.$el.find('#posts').html(rendered);
		// this.$el.find('.postEntryForm').show();
		return this;
	},

	// Function to execute when user clicks the 'Submit' button
	createPost: function(event){
		event.preventDefault();
		console.log('I got clicked');
		var tempPost,
		title = $('.postTitle').val(),
		content = $('.postContent').val(),
		author = $('.postAuthor').val(),
		tags = $('.postTags').val(),

		tempPost = new Post({
		title: title,
		content: content,
		author: author,
		tags: tags, // .replace(/\s+/g, '').split(','),
		status: 'Published',
		date: new Date().toJSON().slice(0,10)
		});

	allPosts.add(tempPost).save();

	// Clear out form. 'reset' is a built-in jQuery function
	this.$el.find('#data').trigger('reset');
	}
});
var Post = Backbone.Model.extend({
	defaults: {
		status: 'published',
		author: 'Greeley',
		date: 'insert date here'
	},
	initialize: function() {

	}
});

var post = new Post({
	title: 'hi'
  });

Blog = Backbone.Collection.extend ({
	model: Post,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/greeley'
});

var posts = new Blog();
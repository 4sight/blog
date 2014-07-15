var Post = Backbone.Model.extend({
	defaults: {
		title: '',
		content: '',
		date: '',
		status: '',
		author: '',
		tags: [],
	},
	idAttribute: '_id',

	initialize: function(){
		console.log('New post created');
	}
});

var Blog = Backbone.Collection.extend({
	model: Post,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/greeley'
});

var allPosts = new Blog();
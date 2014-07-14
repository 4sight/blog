var Post = Backbone.Model.extend({
	defaults: {
		title: '',
		status: 'published',
		author: 'Greeley',
		date: 'insert date here'
	},
	initialize: function() {

	}
});

var Blog = Backbone.Collection.extend ({
	model: Post,
	url: 'http://tiy-atl-fe-server.herokuapp.com/collections/greeley'
});
Parse.initialize("rsX3pvOkL0hERWukcvb3wu79SHi4sv9djUMe8CG9", "eLfzTR5hEWBaTi7dxqxdsGE0Bwav9BgklKSniOQv");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  // alert("yay! it worked");
});

var Post = Parse.Object.extend({
	defaults: {
		title: '',
		content: '',
		date: '',
		status: '',
		author: '',
		tags: [],
	},
	idAttribute: 'objectId',
	className: 'Post',

	initialize: function(){
		console.log('New post created');
	}
});

var Blog = Parse.Collection.extend({
	model: Post
});

var allPosts = new Blog();
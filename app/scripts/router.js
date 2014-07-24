var PostRouter = Backbone.Router.extend({
  routes: {
  	'' : 'home',
    'post/:id' : 'onePost'
  },

	home: function () {
    new PostView({ collection: allPosts });
  },

  onePost: function(id){
    new PostSingle({ postid: id, collection: allPosts });
  }
});
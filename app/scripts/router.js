var PostRouter = Backbone.Router.extend({
  routes: {
    'post/:id' : 'onePost'
  },

	home: function () {
    new PostView({ collection: Blog });
  },

  onePost: function (id){
    new PostSingle({ postid: id, collection: allPosts });
  }
});
var PostRouter = Backbone.Router.extend({
  routes: {
  	'' : 'login',
    'post/:id' : 'onePost'
  },

  login: function(){
    new Login({});
  },

	home: function(){
    new PostView({ collection: allPosts });
  },

  onePost: function(id){
    new PostSingle({ postid: id, collection: allPosts });
  }
});
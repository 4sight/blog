var PostRouter = Backbone.Router.extend({
  routes: {
  	'' : 'home',
    'post/:id' : 'onePost'
  },

  // initialize: function(){
  //   this.
  // }

	home: function(){
    new PostView({ collection: allPosts });
  },

  onePost: function(id){
    new PostSingle({ postid: id, collection: allPosts });
  }
});
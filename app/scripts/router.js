var PostRouter = Backbone.Router.extend({
  routes: {
    'post/:id' : 'onePost'
  },

  onePost: function (id) {
    new PostSingle({ postid: id });
  }
});

new PostRouter();

Backbone.history.start();
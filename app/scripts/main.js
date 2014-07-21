allPosts.fetch().done(function(){
  //new PostView({collection: allPosts});
  window.router = new PostRouter();
	Backbone.history.start();
});

$('header a').on('click', function (e) {
	e.preventDefault();
	window.router.navigate("", {trigger: true});
});
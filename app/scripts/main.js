allPosts.fetch().done(function(){
  new PostView({collection: allPosts});
  new PostRouter();
	Backbone.history.start();
});

$('header a').on('click', function (e) {
	e.preventDefault();
	window.appr.navigate("", {trigger: true});
});
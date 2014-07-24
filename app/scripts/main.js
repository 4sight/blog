allPosts.fetch().done(function(){
  window.router = new PostRouter();
	Backbone.history.start();
});

$('header a').on('click', function (e) {
	e.preventDefault();
	window.router.navigate("", {trigger: true});
});

// Kill zombies

var PostsView = function(){
	this.showView = function(view){
		if (this.currentView){}
			this.currentView = view;
			this.currentView.render();
			$('#dbltap').html(this.currentView.el);
	}
};
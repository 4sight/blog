var PostSingle = Backbone.View.extend ({
	el: '#blog',

	events: {
		'click h2 a': 'viewPost',
    'click .delete' : 'deletePost'
	},

  initialize: function(attributes){
  	this.options = attributes;
  	this.render();
	},

  render: function (options){
  	var single = this.collection.get(this.options.postid);
  	var template = Handlebars.compile($('#singlePostTemplate').html());
		var rendered = template(single.toJSON());
    this.$el.html(rendered);
  },

  viewPost: function (event){
  	event.preventDefault();
  	event.stopPropagation();
  	var postID = $(event.target).attr('id');
  	window.name_router.navigate('#post/'+id, {trigger:true});
  },

  deletePost: function (event) {
    event.preventDefault();
    event.stopPropagation();
    // Confirmation dialogue
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.options.destroy({success: function () {
        window.PostRouter.navigate('', { trigger: true }); // Route home
      }});
    }
  }
});
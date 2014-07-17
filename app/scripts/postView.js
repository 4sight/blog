var PostSingle = Backbone.View.extend ({
	el: '#blog',

  initialize: function(){
	this.render();
	this.collection.id;
	window.appr.navigate('', {trigger: true}),
 
	events: {
		'click h2 a': 'viewPost'
	},

  render: function (options) {
  	var template = Handlebars.compile($('#singlePostTemplate').html());
		var rendered = template();
    this.$el.find('#posts').html(rendered);
  },

  viewPost: function (event){
  	event.preventDefault();
  	event.stopPropagation();
  	var postID = $(event.target).attr('id');
  	window.name_router.navigate('#post/'+id, {trigger:true});
  }
});
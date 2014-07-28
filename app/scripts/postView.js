var PostSingle = Backbone.View.extend ({
	el: '#blog',

	events: {
    'click .delete' : 'deletePost'
	},

  initialize: function(attributes){
  	this.single = this.collection.get(attributes.postid);

    // 1. creating a variable ... a local `this` mapped var = this.single
    // 2. Looking into my collection with this.collection
    // 3. Using BB's `get` mehtod to get the model
    // 4. Using the objectct passed in `attributes` to drill down to our id `attributes.id`
    // 5. returns `this.single` = our specific model from our URL

  	this.render();
	},

  render: function (options){
  	var template = Handlebars.compile($('#singlePostTemplate').html());
		var rendered = template(this.single.toJSON());
    this.$el.find('#posts').html(rendered);
    $('#data').hide();
    $('#userAccess').hide();
  },

  deletePost: function (event) {
    event.preventDefault();
    event.stopPropagation();
    // Confirmation dialogue
    if (window.confirm("Are you sure you want to delete this post?")) {
      this.single.destroy({success: function () {
        window.router.navigate('', { trigger: true }); // Route home
      }});
    }
  }
});
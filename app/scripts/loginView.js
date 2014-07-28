var user = new Parse.User();
user.set("username", $('.email').val());
user.set("password", $('.password').val());
// user.set("email", "email@example.com");

// user.signUp(null, {
//   success: function(user){
//     new PostView({ collection: allPosts });
//   },
//   error: function(user, error){
//     // Show the error message somewhere and let the user try again.
//     alert('Error: ' + error.code + ' ' + error.message);
//   }
// });

var Login = Backbone.View.extend({
	el: '#blog',

events: {
		'submit form.loginForm' : 'login',
    'submit form.signUpForm' : 'signUp'
	},

initialize: function(){
		this.render();
	},

login: function(){
	var self = this;
	var username = this.$('.loginEmail').val();
	var password = this.$('.loginPassword').val();

	Parse.User.logIn(username, password, {
	  success: function(user){
	    new PostView({ collection: allPosts });
	    delete self;
	  },
	  error: function(user, error) {
	    // The login fails
	    self.$('.loginForm .error').html('Invalid username or password. Please try again.').show();
	  }
	});

	return false;
},

signUp: function(e){
	e.preventDefault();
	var self = this;
	var username = this.$('.newUsername').val();
	var password = this.$('.newPassword').val();
	console.log(username);
	console.log(password);

	Parse.User.signUp(username, password, { ACL: Parse.ACL() }, {
		success: function(user){
			new PostView({ collection: allPosts });
			delete self;
		},

		error: function(user, error){
		self.$('.signUpForm .error').html(error.message).show();	
		}
	});

	return false;
},

render: function(){
		$('#data').hide();
		$('#posts').hide();
	},

});
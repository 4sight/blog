allPosts.fetch().done(function(){
  new Post({collection: allPosts});
});

$('header a').on('click', function (e) {
 e.preventDefault();
 window.appr.navigate("", {trigger: true});
});
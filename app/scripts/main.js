$(document).ready(function(){
  var libro = $('.owl-carousel');
  libro.owlCarousel({
    'animateOut': false,
    'animateIn': false,
    'center': true,
    'items': 1,
    'lazyLoad': true
  });

  libro.on('loaded.owl.lazy', function(event) {
    var nextpic = new Image();
    var totitem = event.item.count;
    var nextitem = event.item.index + 1;

    if (nextitem <= totitem) {
      var nxtimg = $(event.target).find('.owl-item').eq(nextitem).find('img');
      var imgsrc = nxtimg.data('src');
      nxtimg.attr('src', imgsrc);
      nextpic.src = imgsrc;
    }
  });

  jQuery(document.documentElement).keyup(function (event) {
    // handle cursor keys
    if (event.keyCode == 37) {
       console.log('go left');
       libro.trigger('prev.owl.carousel');
    } else if (event.keyCode == 39) {
       console.log('go right');
       libro.trigger('next.owl.carousel');
    }
  });

});

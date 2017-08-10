/* Applying the "open" class when you click the Menu button, which triggers the mobile menu to open/close; Toggle Open Menu/Close menu text. */
$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Menu X' ? 'Menu' : 'Menu X');
    e.preventDefault();
  });
});

$(".faq-q").click( function () {
  var container = $(this).parents(".faq-c");
  var answer = container.find(".faq-a");
  var trigger = container.find(".faq-t");
  
  answer.slideToggle(200);
  
  if (trigger.hasClass("faq-o")) {
    trigger.removeClass("faq-o");
  }
  else {
    trigger.addClass("faq-o");
  }
});

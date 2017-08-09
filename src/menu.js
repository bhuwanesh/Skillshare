/* Applying the "open" class when you click the Menu button, which triggers the mobile menu to open/close; Toggle Open Menu/Close menu text. */
$(document).ready(function() {
  $('.mobile-button a').click(function(e) {
	$(this).parent().parent().toggleClass('open');
  $(this).html($(this).html() == 'Menu X' ? 'Menu' : 'Menu X');
    e.preventDefault();
  });
});

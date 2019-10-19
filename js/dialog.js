(function(jQuery){
(function($){
var textdialog;

$('label').click(function() {
  textdialog = $(this).attr('for');
  $('#' + textdialog).toggleClass('active');
}); 
})(jQuery_2_2_4)
})(jQuery_2_2_4);

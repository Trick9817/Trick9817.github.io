$('.Head .menu .button').click(function(e){
  e.preventDefault();
  alert('Was pressed' + $(this).text());                               
});
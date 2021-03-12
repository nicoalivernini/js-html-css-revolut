 var selectionMenu = $('.list-menu li')
 var selectionDropdown = $('.drop-menu')

 selectionMenu.mouseenter(function(){
   $(this).children().addClass('active');
 })
 selectionMenu.mouseleave(function(){
   $(this).children().removeClass('active');
 })

console.log('ok');

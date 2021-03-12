var selectionMenu = $('.navbar-nav > li.dropdown')
var selectionDropdown = $('.navbar-nav > li.dropdown > ul.dropdown-menu')

selectionMenu.mouseenter(function(){
  selectionDropdown.addClass('active');
})
selectionMenu.mouseleave(function(){
  selectionDropdown.removeClass('active');
})

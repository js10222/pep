<script>
jQuery(function($){
$(document).ready(function(){

  
$('.dropdown-menu-column').each(function(i){
  
i = i + 1;
  
var $dropdownMenuItems = $(this).find('.dropdown-menu-item');
var $mainMenuItem = $('.first-level-' + i + '>a');
$dropdownMenuItems.wrapAll('<div class="dropdown-menu-container-' + i + '" />');
var $dropdownContainer = $('.dropdown-menu-container-' + i);
$dropdownContainer.insertAfter($mainMenuItem);
  
});

var $firstLevel = $('.et_mobile_menu .first-level > a');
var $allDropdowns = $('.et_mobile_menu [class*="dropdown-menu-container"]');

$firstLevel.off('click').click(function() {

$(this).attr('href', '#');  
var $thisDropdown = $(this).siblings(); 

$thisDropdown.slideToggle();
$(this).toggleClass('icon-switch');

var dropdownSiblings = $allDropdowns.not($thisDropdown);   
dropdownSiblings.slideUp();

var $thisFirstLevel = $(this);
var $firstLevelSiblings = $firstLevel.not($thisFirstLevel);
$firstLevelSiblings.removeClass('icon-switch');  

});    
    
$(".dropdown-menu-row").css('visibility','hidden');
     
$(window).load(function() {
$(".dropdown-menu-row").fadeIn(1000);
});
  
});
});
  
</script>

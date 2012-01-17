$(document).ready(function() {
  jQuery.fn.selectCompare = function(){
	  var values = [];
	  var i = 0;
	  this.each(function(){
	     values[i++] = $(this).val();
	  });
		  return values;
	  }
	  
	  var attr = $("input:checked").selectCompare();
	  alert(attr); 
});



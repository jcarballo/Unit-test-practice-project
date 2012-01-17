$(document).ready(function() {
  var i = 0;
  $(".check").click(function(){
	  if($(this).attr("checked")){
		  i++;
		  if(i > 4){
		  	alert('Maximum of 4 comparison parts');
		  }
	  }
	  else{
		  i--;
	  }
  });
});



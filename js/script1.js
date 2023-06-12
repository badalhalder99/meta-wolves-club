/*...............count plus one*..................*/	
var count = 0;

function updateUI(){
	$("#lblCount").text(count);
    if (count >= 5) {
    	$("#btnUp").attr("disabled","disabled");
    } else {
      $("#btnUp").attr("disabled",false);
    }
    
    if (count <= 1) {
    	$("#btnDown").attr("disabled","disabled");
    } else {
      $("#btnDown").attr("disabled",false);
    }
}

function calculateCount(value) {
	count+= value;
  updateUI();
}

function init() {
	updateUI();
};
/*....................count plus two...............................*/	

var count2 = 0;

function updateUI2(){
	$("#lblCount2").text(count2);
    if (count2 >= 10) {
    	$("#btnUp2").attr("disabled","disabled");
    } else {
      $("#btnUp2").attr("disabled",false);
    }
    
    if (count2 <= 1) {
    	$("#btnDown2").attr("disabled","disabled");
    } else {
      $("#btnDown2").attr("disabled",false);
    }
}

function calculateCount2(value) {
	count2+= value;
  updateUI2();
}

function init2() {
	updateUI2();
};	
	
/*.................carosel timing.........................*/	
	
$('#client').carousel({
    interval: 2000
});	
	
/*.....................FAQ PART JS.........................*/	

$(document).ready(function(){
	// Add down arrow icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-angle-down").removeClass("fa-angle-right");
	});
	
	// Toggle right and down arrow icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-right").addClass("fa-angle-down");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-right");
	});
});
	
/*.....................sticky header PART JS.........................*/	
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$(".header-area").addClass("sticky");
		} else {
			$(".header-area").removeClass("sticky");
		}
	});
	
/*.....................End  JS.........................*/		
	
	
	
	
	
	
	
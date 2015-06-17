$(function(){
	$('#dowebok').fullpage({
	'controlArrowColor': '#C0C0C0',

	afterSlideLoad: function(anchorLink, index, slideIndex, direction){
			if((index == 4) && (slideIndex == 1)){
				$('.pjt10').fadeOut(500,pjt11);
			}
		}
	});

	


	$('.start0').fadeOut(2000,picfadein);


});


function picfadein(){
	$('.pic000').fadeIn(1000);
};

function pjt11(){
	$('.pjt11').fadeIn(500);
};
$(function(){
	$('#dowebok').fullpage({
	'controlArrowColor': '#C0C0C0',


	afterLoad: function(anchorLink, index){
			if(index == 6){
				$('.fin0').fadeOut(2000,fin);
			}
	},

	afterSlideLoad: function(anchorLink, index, slideIndex, direction){
			if((index == 4) && (slideIndex == 1)){
				$('.font041').animate({paddingTop:'20px'},pjt01)
			}
			if((index == 4) && (slideIndex == 2)){
				$('.font042').animate({paddingTop:'20px'},pjt02)
			}
			if((index == 4) && (slideIndex == 3)){
				$('.font043').animate({paddingTop:'20px'},pjt03)
			}
			if((index == 4) && (slideIndex == 4)){
				$('.font044').animate({paddingTop:'20px'},pjt04)
			}
			if((index == 4) && (slideIndex == 5)){
				$('.font045').animate({paddingTop:'20px'},pjt05)
			}
			if((index == 5) && (slideIndex == 1)){
				$('.ajitext').fadeIn(2000);
			}
		}
	});

	$('.start0').fadeOut(2000,picfadein);

	$('.crc').click(function(){
		$(this).children(".crcc0").fadeToggle(500);
		$(this).children(".crcc1").fadeToggle(500);
	});
	

});


function picfadein(){
	$('.pic000').fadeIn(1000);
};

function pjt01(){
	$('.pjt01').fadeIn(500);
}

function pjt02(){
	$('.pjt02').fadeIn(500);
}

function pjt03(){
	$('.pjt03').fadeIn(500);
}

function pjt04(){
	$('.pjt04').fadeIn(500);
}

function pjt05(){
	$('.pjt05').fadeIn(500);
}

function fin(){
	$('.fin').fadeIn(2000);
}
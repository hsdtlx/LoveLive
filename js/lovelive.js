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
	$('.crc20').click(function(){
		$('.crc21').fadeToggle(500);
		$('.crc22').fadeToggle(500);
	});
	$('.crc30').click(function(){
		$('.crc31').fadeToggle(500);
		$('.crc32').fadeToggle(500);
	});
	$('.crc40').click(function(){
		$('.crc41').fadeToggle(500);
		$('.crc42').fadeToggle(500);
	});
	$('.crc50').click(function(){
		$('.crc51').fadeToggle(500);
		$('.crc52').fadeToggle(500);
	});
	$('.crc60').click(function(){
		$('.crc61').fadeToggle(500);
		$('.crc62').fadeToggle(500);
	});
	$('.crc70').click(function(){
		$('.crc71').fadeToggle(500);
		$('.crc72').fadeToggle(500);
	});
	$('.crc80').click(function(){
		$('.crc81').fadeToggle(500);
		$('.crc82').fadeToggle(500);
	});
	$('.crc90').click(function(){
		$('.crc91').fadeToggle(500);
		$('.crc92').fadeToggle(500);
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
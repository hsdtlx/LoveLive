 $(document).ready(function(){	
		loadpics();
		loadbutton();
		login();
	});


function loadpics(){
	var pic = new Array(6);
		pic[1] = '<div class="pic1 container-fluid"></div>';
		pic[2] = '<div class="pic2 container-fluid"></div>';
		pic[3] = '<div class="pic3 container-fluid"></div>';
		pic[4] = '<div class="pic4 container-fluid"></div>';
		pic[5] = '<div class="pic5 container-fluid"></div>';
		pic[6] = '<div class="pic6 container-fluid"></div>';

	for (var i=1; i<7; i++){
		$('.picfluid1').append(pic[i]);
	}

	for (var i=6; i>0; i--){
		$('.picfluid2').append(pic[i]);
	}
	for (var i=1; i<7; i++){
		$('.picfluid3').append(pic[i]);
	}

};

function loadbutton(){
	$('.loadbutton').click(function(){
		loadpics();
	});
};

function login(){
	var i1 = 0;
	var i2 = 0;
	$('.nameinput').keyup(function(){
		var name = $('.nameinput').val();
		if (name == '123') {
			$('.inputtip').text('姓名正确');
			i1 = 1;
		}
		else if (name == ''){
			$('.inputtip').text('姓名为空');
		}
		else {
			$('.inputtip').text('姓名错误');
		};
	});

		$('.pswinput').keyup(function(){
		var psw = $('.nameinput').val();
		if (psw == '123') {
			$('.inputtip').text('密码正确');
			i2 = 1;
		}
		else if (psw == ''){
			$('.inputtip').text('密码为空');
		}
		else {
			$('.inputtip').text('密码错误');
		};
	});


	$('.loginbutton').click(function() {
		if (i1==1 && i2==1){
			$('lgi').text('已登录')
		};
	});

	$('.fade').blur(function(){
		$('.inputtip').text('');
		$('.nameinput').val('');
		$('.pswinput').val('');
	});
};

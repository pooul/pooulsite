var common =function  () {
	$('#milestone').height($(window).height()-140);
	$('#quote').height($(window).height()-140);
	$('#action-box').height($(window).height()-140);
	$('#client').height($(window).height()-140);
	$('#market').height($(window).height()-140);
	$('#carousel-example-generic').css('max-height',$(window).height());
	$('#carousel-example-generic').css('overflow','hidden');
	$('body').touchwipe({
		wipeLeft:function(){
			$('#right_imgbtn').trigger('click');
		},
		wipeRight:function(){
			$('#left_imgbtn').trigger('click');
		},
		min_move_x:20,
		min_move_y:20,
		preventDefaultEvents:false
	});
	if ($(window).width()<$(window).height()) {
		$('.carousel-inner img').css('min-width','140%');
		$('.carousel-inner img').css('margin-left',-$('.carousel-inner img').width()*0.14+'px');
		$('#about-hr').css('display','none');
		$('#page_item i').css('display','none');
	}
	if ($('div').hasClass('pages_home')) {
		$('#navs_home').addClass('active');
	};
	if ($('div').hasClass('pages_qpos')) {
		$('#navs_qpos').addClass('active');
	};
	if ($('div').hasClass('pages_partner')) {
		$('#navs_partner').addClass('active');
	};
	if ($('div').hasClass('pages_press')) {
		$('#navs_press').addClass('active');
	};
	if ($('div').hasClass('pages_support')) {
		$('#navs_support').addClass('active');
	};
	if ($('div').hasClass('pages_safety_and_security')) {
		$('#navs_safety_and_security').addClass('active');
	};

	$('#weixin-logo').mouseover(function(){
		$('#weixin-img').css('display','block');
	});
	$('#weixin-logo').mouseout(function(){
		$('#weixin-img').css('display','none');
	});
}
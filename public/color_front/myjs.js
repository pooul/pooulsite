var myjs =function  () {
	$('#milestone').height($(window).height()-150);
	$('#quote').height($(window).height()-150);
	$('#action-box').height($(window).height()-150);
	$('#client').height($(window).height()-150);
	$('#market').height($(window).height()-150);
	$('#carousel-example-generic').css('max-height',$(window).height());
	$('#carousel-example-generic').css('overflow','hidden');
	if ($(window).width()<$(window).height()) {
		$('.carousel-inner img').css('min-width','140%');
		$('.carousel-inner img').css('margin-left',-$('.carousel-inner img').width()*0.14+'px');
		$('#about-hr').css('display','none');
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
	if ($('div').hasClass('pages_supprrt')) {
		$('#navs_supprrt').addClass('active');
	};
	if ($('div').hasClass('pages_safety_and_security')) {
		$('#navs_pages_safety_and_security').addClass('active');
	};

	$('#weixin-logo').mouseover(function(){
		$('#weixin-img').css('display','block');
	});
	$('#weixin-logo').mouseout(function(){
		$('#weixin-img').css('display','none');
	});
}
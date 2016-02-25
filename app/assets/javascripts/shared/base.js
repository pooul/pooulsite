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
	if ($(window).width()<767) {
		$('.carousel-inner img').css('min-width','140%');
		$('.carousel-inner img').css('margin-left',-$('.carousel-inner img').width()*0.14+'px');
	}

    $('.navbar-nav li a[href="'+ window.location.pathname +'"]').parents('li').addClass('active');
  	
	$('#weixin-logo').mouseover(function(){
		$('#weixin-img').css('display','block');
	});
	$('#weixin-logo').mouseout(function(){
		$('#weixin-img').css('display','none');
	});

	$('.has-bg').anystretch();
	$('#partner-submit').click(function(){
		alert('我们已保存您提交的信息，请耐心等待。谢谢合作！');
	});
}
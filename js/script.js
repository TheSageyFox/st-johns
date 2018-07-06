function mobileNav(){
	if(this.classList.contains('closed')){
		$('#mobile-nav').attr('style', 'display:inline-block');
		$(this).addClass('open');
		$(this).removeClass('closed');
	}else if(this.classList.contains('open')){
		$('#mobile-nav').removeAttr('style');
		$(this).addClass('closed');
		$(this).removeClass('open');
	};
}
function subNav(){
	if(this.classList.contains('closed')){
		$('.sub-nav').attr('style', 'display:inline-block');
		$(this).addClass('open');
		$(this).removeClass('closed');
	}else if(this.classList.contains('open')){
		$('.sub-nav').removeAttr('style');
		$(this).addClass('closed');
		$(this).removeClass('open');
	};
}
$('#menu-button').click(mobileNav);
$('#sub-nav-dd').click(subNav);




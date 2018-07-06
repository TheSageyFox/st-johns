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
	console.log('CLick mutha fucker');
	}

$('#menu-button').click(mobileNav);





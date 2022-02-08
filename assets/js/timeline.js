jQuery(document).ready(function($){
	let $timelineBlocks = $('.timeline-block');

	//hide timeline blocks which are outside the viewport
	$timelineBlocks.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.timeline-img, .timeline-content').addClass('is-hidden');
		}
	});

	//on scrolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timelineBlocks.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.timeline-img').hasClass('is-hidden') ) {
				$(this).find('.timeline-img, .timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});
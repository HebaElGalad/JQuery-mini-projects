// Create an image gallery. You can go through the images either by clicking on the image directly or by clicking on right/left buttons. Try to add jQuery effects to make the transition between images smoother.

$('button').on('click', imageGallery);

function imageGallery(event) {
	var clickedElement = $(event.target);

	if (clickedElement.is('#previous')) {
		$('.active').prev().addClass("active");
		$('.active').next().addClass("hidden").removeClass("active");
		$(".current").prev().addClass("current").removeClass("invisible");
		$($('.current')[1]).removeClass("current").addClass("invisible");
	} else if (clickedElement.is('#next')) {
		$('.active').next().addClass("active");
		$('.active').prev().addClass("hidden").removeClass("active");
		$(".current").next().addClass("current").removeClass("invisible");
		$($('.current')[0]).addClass("invisible").removeClass("current");
	}
	// console.log(event);
}
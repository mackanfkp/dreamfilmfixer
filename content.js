// console.log('Dreamfilmhd Fixer Starting');

// Remove the top banner
$('#subscribelink').detach().remove();
$('div.longbanner').detach().remove();
$('div.etc-slider').detach().remove();
$('.slidebox').detach().remove();

$('#template-row').css('margin-top', '5px');
$('img.logo').closest('div').css('margin-top', '0px');
$('img.mimg').closest('.panel-body').css('height', '290px');

// Remove the non-href a-tags
$('a').filter(function() { return ! this.attributes['href']; }).each(function() {
	var onc = $(this).attr('onclick');

	if (onc) {
		$(this).detach().remove();
	}
});

// Remove scripts
$('script').each(function() {
	var src = $(this).attr('src');
	var txt = $(this).text();

	if (src) {
		if (src.match(/pop/g)) {
			$(this).detach().remove();
		}

		if (src.match(/advert/g)) {
			$(this).detach().remove();
		}
	}

	if (txt.match(/adParams/)) {
		$(this).detach().remove();
	}

	if (txt.match(/advert/)) {
		$(this).detach().remove();
	}
});

// Set empty vars in the bottom
$('body').append(
	$('<script>_g={}; adParams = {};</script>')
);

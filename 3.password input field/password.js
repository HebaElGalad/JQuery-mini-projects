// Create a password input field such that once the number of characters entered reaches 8 or more, a green check ✔ is displayed next to the field, otherwise a red cross ✘ is shown.

$('#user-password').change(checkCharacters);

function checkCharacters() {
	var value = $('#user-password').val();

	if (value.length >= 8) {
		$('.correct').css({"display": "inline-block"});
		$('.wrong').css({"display": "none"});
	} else {
		$('.wrong').css({"display": "inline-block"});
		$('.correct').css({"display": "none"});
	}
}

function validateName(tag) {
	let words = wordCounter(tag.value);
	if (words < 2 || words > 2) {
		tag.setCustomValidity("НЕТ");
	}
}
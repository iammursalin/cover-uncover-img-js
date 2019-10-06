var btn = document.getElementsByClassName('btn')[0],
	text = document.getElementsByClassName('text')[0],
	img = document.getElementsByClassName('img')[0],
	a = 0;
function coverImage() {
	if(a == 0) {
		btn.innerHTML = "Cover Image";
		text.style.display = "none";
		img.style.filter = "blur(0)";
		img.style.transition = "0.3s";
		a = 1;
	}else {
		btn.innerHTML = "Uncover Image";
		text.style.display = "block";
		img.style.filter = "blur(24px)";
		a = 0;
	}
}
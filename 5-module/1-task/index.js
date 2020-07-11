function hideSelf() {
  const button = document.querySelector('button');
  button.addEventListener('click', event => {
		button.hidden = true;
	});
}

function toggleText() {
  const button = document.querySelector('button');
  const div = document.querySelector('div');
  button.addEventListener('click', event => {
    div.hidden = !div.hidden;
	});
}

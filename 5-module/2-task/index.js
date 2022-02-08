function toggleText() {
  const text = document.querySelector('#text');
  const button = document.querySelector('.toggle-text-button');
  button.onclick = () => {
    text.hidden = !text.hidden
  };
}

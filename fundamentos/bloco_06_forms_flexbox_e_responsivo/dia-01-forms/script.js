function handleSubmit(event) {
    event.preventDefault();
  }

window.onload = function () {
  const submitBtn = document.querySelector('#submit-btn');
  submitBtn.addEventListener('click', handleSubmit);
};
const radios = document.querySelectorAll('input[name="sexo"]');

radios.forEach(radio => {
  radio.addEventListener('click', function() {
    radios.forEach(r => r.checked = false);
    this.checked = true;
  });
});

const range = document.querySelector('#range');
const rangeValues = [
  document.querySelector('.range__input--min'),
  document.querySelector('.range__input--max'),
];
range.innerHTML = '';
range.classList.toggle('range');

noUiSlider.create(range, {
  start: [0, 900],
  connect: [false, true, false],
  step: 25,
  range: {
      'min': [0],
      'max': [1050]
  }
});

rangeValues.forEach(function (input, handle) {

  input.addEventListener('change', function () {
      range.noUiSlider.setHandle(handle, this.value);
  });
});

range.noUiSlider.on('update', function (values, handle) {
  rangeValues[handle].value = Math.floor(values[handle]);
});

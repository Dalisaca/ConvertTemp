function convertTemp() {
  let inputTempC = document.querySelector('.textAreaC').value;
  inputTempC = (inputTempC * 9) / 5 + 32;

  let output = `${inputTempC}`;
  document.querySelector('.textareaF').value = output;
}

$('#target').on('keyup', function () {
  if (this.value > 9999) {
    this.value = '9999';
    alert('The number is bigger than 9999');
  } else if (this.value < -999) {
    this.value = '-999';
    alert('The number is lower than -999');
  }
});

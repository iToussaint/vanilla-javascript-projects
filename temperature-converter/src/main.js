const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

celsius.addEventListener("input", function () {
  fahrenheit.value = (this.value * 9) / 5 + 32;
  kelvin.value = Number(this.value) + 273.15;
});
fahrenheit.addEventListener("input", function () {
  celsius.value = ((this.value - 32) * 5) / 9;
  kelvin.value = ((Number(this.value) + 459.67) * 5) / 9;
});
kelvin.addEventListener("input", function () {
  celsius.value = this.value - 273.15;
  fahrenheit.value = (this.value * 9) / 5 - 459.67;
});

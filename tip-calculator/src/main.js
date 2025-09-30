const billAmount = document.getElementById("bill-amount");
const tipPercentage = document.getElementById("tip-percentage");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("tip");

calculateBtn.addEventListener("click", () => {
  result.textContent =
    (Number(tipPercentage.value) * Number(billAmount.value)) / 100 +
    Number(billAmount.value);
});

const calculateBtn = document.getElementById("calculate-btn");
const ageText = document.getElementById("age");
const message = document.getElementById("message");
const dateOfBirthField = document.getElementById("date-of-birth");

let [yearToday, monthToday, dayToday] = [
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  new Date().getDate(),
];

calculateBtn.addEventListener("click", function () {
  message.classList.remove("hidden");
  ageText.textContent = calculate(this.value)
    .reverse()
    .reduce(
      (acc, el, index) =>
        acc +
        el +
        (index === 0 ? " years " : index === 1 ? " months " : " and days"),
      ""
    );
});

function calculate(dateOfBirth) {
  const [yearBirth, monthBirth, dayBirth] = dateOfBirth
    .split("-")
    .map((element) => Number(element));

  const days = dayToday - dayBirth;
  const months = monthToday - monthBirth;
  const years = yearToday - yearBirth;

  return [days, months, years].map((el, index, arr) => {
    if (el < 0) {
      if (index === 0) {
        console.log(new Date(yearToday, monthToday, 0));
        el += new Date(yearToday, monthToday, 0);
        arr[index + 1]--;
      } else if (index === 1) {
        el += 12;
        arr[index + 1]--;
      }
    }
    return el;
  });
}

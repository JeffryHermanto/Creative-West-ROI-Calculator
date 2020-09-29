const form = document.querySelector(".form");
const result = document.querySelector(".result");
const resetButton = document.querySelector(".reset-button");
const error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numberOfEmployees = parseInt(form.numberOfEmployees.value);
  const hoursPerWeek = parseInt(form.hoursPerWeek.value);
  const costsPerHour = parseInt(form.costsPerHour.value);

  console.log("Number of Employees that use PowerPoint:", numberOfEmployees);
  console.log("Hours per week in PowerPoint averagely:", hoursPerWeek);
  console.log("Costs per Hour:", costsPerHour);

  if (!numberOfEmployees && !hoursPerWeek && !costsPerHour) {
    error.textContent = "Please input all fields...";
    setInterval(() => (error.textContent = ""), 3000);
  } else {
    calculate(numberOfEmployees, hoursPerWeek, costsPerHour);
  }
});

function calculate(numberOfEmployees, hoursPerWeek, costsPerHour) {
  error.textContent = "";

  const savedTimePercentage = 0.35;
  const workingWeekAveragePerMonth = 4.3333;

  const hoursPerWeekSaved =
    numberOfEmployees * hoursPerWeek * savedTimePercentage;
  const eurosPerWeekSaved = hoursPerWeekSaved * costsPerHour;
  const hoursPerMonthSaved = hoursPerWeekSaved * workingWeekAveragePerMonth;
  const eurosPerMonthSaved = hoursPerMonthSaved * costsPerHour;

  console.log("Hours per week saved:", hoursPerWeekSaved);
  console.log("Euros per week saved:", eurosPerWeekSaved);
  console.log("Hours per month saved:", hoursPerMonthSaved);
  console.log("Euros per month saved:", eurosPerMonthSaved);

  result.querySelector(".hours-per-month-saved").textContent = Math.floor(
    hoursPerMonthSaved
  );

  result.querySelector(
    ".euros-per-month-saved"
  ).textContent = `€ ${numberWithCommas(Math.floor(eurosPerMonthSaved))}`;

  result.classList.add("active");
}

resetButton.addEventListener("click", (e) => {
  e.preventDefault();

  form.reset();
  result.classList.remove("active");
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

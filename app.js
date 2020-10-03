const form = document.querySelector(".form");
const error = document.querySelector(".error");
const result = document.querySelector(".result");

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

  const hoursSavedPerWeek =
    numberOfEmployees * hoursPerWeek * savedTimePercentage;
  const eurosSavedPerWeek = hoursSavedPerWeek * costsPerHour;
  const hoursSavedPerMonth = hoursSavedPerWeek * workingWeekAveragePerMonth;
  const eurosSavedPerMonth = hoursSavedPerMonth * costsPerHour;

  console.log("Hours saved per week:", hoursSavedPerWeek);
  console.log("Euros saved per week:", eurosSavedPerWeek);
  console.log("Hours saved per month:", hoursSavedPerMonth);
  console.log("Euros saved per month:", eurosSavedPerMonth);

  result.querySelector("#hoursSavedPerMonth").value = Math.floor(
    hoursSavedPerMonth
  );

  result.querySelector("#eurosSavedPerMonth").value = numberWithCommas(
    Math.floor(eurosSavedPerMonth)
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const textYear = document.getElementById("years");
const textMonths = document.getElementById("months");
const textDays = document.getElementById("days");

const inputYear = document.getElementById("year-input");
const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");

function validateValue(element, minValue, maxValue) {
    if (element.value >= minValue && element.value <= maxValue) {
        element.classList.remove("input-error");
        return;
    } else {
        console.log(element.value + "error!");
        element.classList.add("input-error");
    }
}

function calculateAge() {
    validateValue(inputYear, 0, 9999);
    validateValue(inputMonth, 1, 12);
    validateValue(inputDay, 1, 31);

    textYear.innerHTML = inputYear.value;
    textMonths.innerHTML = inputMonth.value;
    textDays.innerHTML = inputDay.value
}
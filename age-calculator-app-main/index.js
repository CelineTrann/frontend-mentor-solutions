const textYear = document.getElementById("years");
const textMonths = document.getElementById("months");
const textDays = document.getElementById("days");

const inputYear = document.getElementById("year-input");
const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");

function validateValueRange(value, minValue, maxValue) {
    if (value < minValue || value > maxValue) {
        return false;
    }
    return true;
}

function validateDays(day, month, year) {
    let feb = year % 4 == 0 ? 29 : 28;
    let validDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (day > validDays[month]) {
        return false;
    } 
    return true;
}

function validateIsInPast(day, month, year) {
    let currDate = new Date();
    let inputDate = new Date(year, month, day);
    return currDate > inputDate;
}

function applyError(element, isValid) {
    if (isValid) {
        element.classList.remove("input-error");
    } else {
        element.classList.add("input-error");
    }
}

function validate(year, month, day) {
    let validYear = validateValueRange(year, 0, 9999) && validateIsInPast(day, month, year);
    let validMonth = validateValueRange(month, 0, 11) && validateIsInPast(day, month, year);
    let validDay = validateValueRange(day, 1, 31) && validateIsInPast(day, month, year) && validateDays(day, month, year);

    applyError(inputYear, validYear);
    applyError(inputMonth, validMonth);
    applyError(inputDay, validDay);

    return validYear && validMonth && validDay;
}

function calculateAge() {
    let [year, month, day] = [inputYear.value, inputMonth.value - 1, inputDay.value];

    if (validate(year, month, day)) {
        let currDate = new Date();
        let inputDate = new Date(year, month, day);
        
    }

    // textYear.innerHTML = inputYear.value;
    // textMonths.innerHTML = inputMonth.value;
    // textDays.innerHTML = inputDay.value
}
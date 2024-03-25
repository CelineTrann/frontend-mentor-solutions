let year, month, day;
let feb;
let validDays

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

function applyInputError(inputElement, labelElement, errorElement, isValid) {
    if (isValid) {
        labelElement.classList.remove("text-error");
        inputElement.classList.remove("input-error");
        errorElement.classList.remove("text-error");
    } else {
        labelElement.classList.add("text-error");
        inputElement.classList.add("input-error");
        errorElement.classList.add("text-error");
    }
}

function validateDay() {
    const labelDay = document.getElementById("day-label");
    const errorDay = document.getElementById("day-error");

    let isValid = true;
    if (inputDay.value == null || inputDay.value == "") {
        isValid = false;
        errorDay.innerHTML = "This field is required";
    } else if (day > validDays[month]) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid date";
    } else if (!validateValueRange(day, 1, 31)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid day";
    }
    
    applyInputError(inputDay, labelDay, errorDay, isValid);
    return isValid;
}

function validateMonth() {
    const labelMonth = document.getElementById("month-label");
    const errorMonth = document.getElementById("month-error");

    let isValid = true;
    if (inputMonth.value == null || inputMonth.value == "") {
        isValid = false;
        errorMonth.innerHTML = "This field is required";
    } else if (!validateValueRange(month + 1, 1, 12)) {
        isValid = false;
        errorMonth.innerHTML = "Must be a valid month";
    } else if (day > validDays[month]) {
        isValid = false;
        errorMonth.innerHTML = "";
    }

    applyInputError(inputMonth, labelMonth, errorMonth, isValid);
    return isValid;
}

function validateYear() {
    const labelYear = document.getElementById("year-label");
    const errorYear = document.getElementById("year-error");

    let currDate = new Date();
    let inputDate = new Date(year, month, day);

    let isValid = true;
    if (inputYear.value == null || inputYear.value == "") {
        isValid = false;
        errorYear.innerHTML = "This field is required";
    } else if (currDate < inputDate) {
        isValid = false;
        errorYear.innerHTML = "Must be in the past";
    }  else if (day > validDays[month]) {
        isValid = false;
        errorYear.innerHTML = "";
    }

    applyInputError(inputYear, labelYear, errorYear, isValid);
    return isValid;
}

function isValid() {
    let isDayValid = validateDay();
    let isMonthValid = validateMonth();
    let isYearValid = validateYear();
    
    return isDayValid && isMonthValid && isYearValid;
}

function calculateAge() {
    [year, month, day] = [inputYear.value, inputMonth.value - 1, inputDay.value];

    feb = year % 4 == 0 ? 29 : 28;
    validDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (isValid()) {
        let currDate = new Date();
        let inputDate = new Date(year, month, day);
        
        let yearDiff = currDate.getFullYear() - inputDate.getFullYear();
        let monthDiff = currDate.getMonth() - inputDate.getMonth();
        
        if (monthDiff < 0) {
            yearDiff--;
            monthDiff += 12;
        }

        let dayDiff = currDate.getDate() - inputDate.getDate();
        if (dayDiff < 0) {
            if (monthDiff > 0) {
                monthDiff--;
            } else {
                yearDiff--;
                monthDiff = 11;
            }
            
            dayDiff += validDays[inputDate.getMonth()];
        }

        textYear.innerHTML = yearDiff;
        textMonths.innerHTML = monthDiff;
        textDays.innerHTML = dayDiff;

    } else {
        textYear.innerHTML = "----";
        textMonths.innerHTML = "--";
        textDays.innerHTML = "--";
    }
}
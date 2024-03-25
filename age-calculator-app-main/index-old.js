const textYear = document.getElementById("years");
const textMonths = document.getElementById("months");
const textDays = document.getElementById("days");

const inputYear = document.getElementById("year-input");
const inputMonth = document.getElementById("month-input");
const inputDay = document.getElementById("day-input");

const labelYear = document.getElementById("year-label");
const labelMonth = document.getElementById("month-label");
const labelDay = document.getElementById("day-label");

const errorYear = document.getElementById("year-error");
const errorMonth = document.getElementById("month-error");
const errorDay = document.getElementById("day-error");

function validateValueRange(value, minValue, maxValue) {
    if (value < minValue || value > maxValue) {
        return false;
    }
    return true;
}

function validateDays(day, month, validDays) {
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

function applyInputError(labelElement, inputElement, errorElement, isValid) {
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

function validateDay(year, month, day, validDays) {
    isValid = true;
    if (!validateValueRange(day, 1, 31) || !validateDays(day, month, validDays)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid day";
    } else if (!validateIsInPast(day, month, year)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid date";
    } 
    
    // TODO: check for empty field

    applyInputError(labelDay, inputDay, errorDay, isValid);
    return isValid;
}

function validateMonth(year, month, day) {
    isValid = true;
    if (!validateValueRange(month, 0, 11)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid month";
    } else if (!validateIsInPast(day, month, year)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid date";
    } 
    
    // TODO: check for empty field

    applyInputError(labelMonth, inputMonth, errorMonth, isValid);
    return isValid;
}

function validateYear(year, month, day) {
    isValid = true;
    if (!validateValueRange(year, 0, 9999)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid year";
    } else if (!validateIsInPast(day, month, year)) {
        isValid = false;
        errorDay.innerHTML = "Must be a valid date";
    } 
    
    // TODO: check for empty field

    applyInputError(labelYear, inputYear, errorYear, isValid);
    return isValid;
}

function validate(year, month, day, validDays) {
    let validYear = validateYear(year, month, day);
    let validMonth = validateMonth(year, month, day)
    let validDay = validateDay(year, month, day, validDays);

    return validYear && validMonth && validDay;
}

function calculateAge() {
    let [year, month, day] = [inputYear.value, inputMonth.value - 1, inputDay.value];

    let feb = year % 4 == 0 ? 29 : 28;
    let validDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (validate(year, month, day, validDays)) {
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
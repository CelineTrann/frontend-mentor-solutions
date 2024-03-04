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

function applyError(element, isValid) {
    if (isValid) {
        element.classList.remove("input-error");
    } else {
        element.classList.add("input-error");
    }
}

function validate(year, month, day, validDays) {
    let validYear = validateValueRange(year, 0, 9999) && validateIsInPast(day, month, year);
    let validMonth = validateValueRange(month, 0, 11) && validateIsInPast(day, month, year);
    let validDay = validateValueRange(day, 1, 31) && validateIsInPast(day, month, year) && validateDays(day, month, validDays);

    applyError(inputYear, validYear);
    applyError(inputMonth, validMonth);
    applyError(inputDay, validDay);

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
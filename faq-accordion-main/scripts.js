var questions = document.getElementsByClassName("question");
for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.marginBottom = "0";
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.marginBottom = "1.2em";
        }
    });
}
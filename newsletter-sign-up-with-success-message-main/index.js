successMsg = document.getElementById("success-message");
mainContent = document.getElementsByClassName("main-container")[0];

emailForm = document.getElementById('email-submit-form');
emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    mainContent.classList.remove("main-active");
    successMsg.classList.add("active");
});

dismissMsgBtn = document.getElementById('dismiss-msg-btn');
dismissMsgBtn.addEventListener("click", function() {
    mainContent.classList.add("main-active");
    successMsg.classList.remove("active");
});




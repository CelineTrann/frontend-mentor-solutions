successMsg = document.getElementById("success-message");

emailForm = document.getElementById('email-submit-form');
emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    successMsg.classList.add("active");
});

dismissMsgBtn = document.getElementById('dismiss-msg-btn');
dismissMsgBtn.addEventListener("click", function() {
    successMsg.classList.remove("active");
});




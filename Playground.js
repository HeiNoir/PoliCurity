function sendEmail(email, subj, msg) {
    window.location.href = "mailto:"+email+"?subject="+subj+"&body="+msg;
}

function validateForm() {
    const subject = document.getElementById("sbj").value;
    const message = document.getElementById("msg").value;
    const email = document.getElementById("email").value;
    if (subject !== "" && message !== "" && validateEmail(email)) {
        alert("Thank you for submitting your email!")
        sendEmail(email, subject, message)
    } else {
        alert("Please refill the form, one of your inputs was invalid!")
    }
}

function validateEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}


const firstN = document.getElementById("fname");
const lastN = document.getElementById("lname");
const email = document.getElementById("email");
const btn = document.getElementById("btnSubmit");
const qry = document.getElementsByName("qt");
const msg = document.getElementById("messageArea");
const consent = document.getElementById("consentCheck");

btn.addEventListener("click", function(event) {
    let hasError = false;

    // Clear previous error messages
    document.getElementById("ErrMsgFn").innerHTML = "";
    document.getElementById("ErrMsgLn").innerHTML = "";
    document.getElementById("ErrMsgEmail").innerHTML = "";
    document.getElementById("ErrMsgQry").innerHTML = "";
    document.getElementById("ErrMsgMessage").innerHTML = "";
    document.getElementById("ErrMsgConsent").innerHTML = "";

    if (firstN.value.trim() === "") {
        document.getElementById("ErrMsgFn").innerHTML = "This field is required";
        hasError = true;
    }

    if (lastN.value.trim() === "") {
        document.getElementById("ErrMsgLn").innerHTML = "This field is required";
        hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
        document.getElementById("ErrMsgEmail").innerHTML = "Please enter a valid email address";
        hasError = true;
    }

    const isRadioChecked = Array.from(qry).some(radio => radio.checked);
    if (!isRadioChecked) {
        document.getElementById("ErrMsgQry").innerHTML = "Please select a query type";
        hasError = true;
    }

    if (msg.value.trim() === "") {
        document.getElementById("ErrMsgMessage").innerHTML = "This field is required";
        hasError = true;
    }

    if (!consent.checked) {
        document.getElementById("ErrMsgConsent").innerHTML = "To submit this form, please consent to being contacted";
        hasError = true;
    }

    if (hasError) {
        event.preventDefault();
    } else {
        // Show the confirmation message
        document.getElementById("confirmMsg").style.visibility = "visible";
    }
});


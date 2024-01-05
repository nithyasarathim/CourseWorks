function validateForm() {
    var name = document.forms["RegForm"]["name"].value;
    var email = document.forms["RegForm"]["email"].value;
    var phone = document.forms["RegForm"]["num"].value;
    var companyName = document.forms["RegForm"]["Cname"].value;
    var jobTitle = document.forms["RegForm"]["Jname"].value;
    var gender = document.forms["RegForm"]["gender"].value;
    var age = document.forms["RegForm"]["age"].value;
    var guestName = document.forms["RegForm"]["GN"].value;
    var paymentMethod = document.forms["RegForm"]["pay"].value;
    var cardNumber = document.forms["RegForm"]["cn"].value;

if (name == " ") {
    alert("Please enter a valid name.");
    return false;
}

if (email == "") {
    alert("Please enter a valid email address.");
    return false;
}

if (phone == "") {
    alert("Please enter a valid phone number.");
    return false;
}

if (companyName == "") {
    alert("Please enter your company name.");
    return false;
}

if (jobTitle == "") {
    alert("Please enter your job title.");
    return false;
}

if (gender === undefined || gender === "") {
    alert("Please select your gender.");
    return false;
}

if (age == "" || isNaN(age) || age < 18 || age > 40) {
    alert("Please enter a valid age between 18 and 40.");
    return false;
}

if (!(guestOption === "Yes" || guestOption === "No")) {
    alert("Please select whether you will bring a guest or not.");
    return false;
}

if (guestOption === "Yes" && guestName == "") {
    alert("Please enter the guest's name.");
    return false;
}

if (!paymentMethod) {
    alert("Please select a payment method.");
    return false;
}

if (cardNumber == "") {
    alert("Please enter your card number.");
    return false;
}

if (expiryDate == "" || !isValidExpiryDate(expiryDate)) {
    alert("Please enter a valid expiry date for the card (MM/YY).");
    return false;
}

if (cvv == "" || isNaN(cvv) || cvv.length !== 3) {
    alert("Please enter a valid 3-digit CVV number.");
    return false;
}

if (address == "") {
    alert("Please enter your billing address.");
    return false;
}

if (howHeard == "None") {
    alert("Please select how you heard about us.");
    return false;
}

return true;
}

function Redirect() {
    window.open("result.html", "_blank");
}

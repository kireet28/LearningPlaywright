function validateForm(email, password) {
    return true;
}

if (validateForm("dev@test.com", "123456")) {
    console.log("Form is valid");
} else {
    console.log("Form is invalid");
}
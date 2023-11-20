function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return false; // Prevent form submission
    }

    // If all fields are filled, the form will be submitted
    return true;
}
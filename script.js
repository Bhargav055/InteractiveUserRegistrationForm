function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirmPassword').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  var terms = document.getElementById('terms').checked;

  // Simple validation example (you can enhance this further)
  if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '' || dob === '' || gender === '' || !terms) {
    alert('Please fill in all fields and accept the Terms and Conditions.');
    return false;
  }

  // Password matching validation
  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }

  // You can perform more specific validations here if needed

  // If all validations pass, the form will be submitted
  return true;
}
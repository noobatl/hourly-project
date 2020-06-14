$(document).ready(function () {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const firstNameInput = $("input#firstName-input");
  const lastNameInput = $("input#lastName-input");
  const roleInput = $("input#role-input");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      firstname: firstNameInput.val().trim(),
      lastname: lastNameInput.val().trim(),
      role: roleInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (
      !userData.firstname ||
      !userData.lastname ||
      !userData.role ||
      !userData.email ||
      !userData.password
    ) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.firstname,
      userData.lastname,
      userData.role,
      userData.email,
      userData.password
    );
    firstNameInput.val("");
    lastNameInput.val("");
    roleInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      firstname: firstname,
      lastname: lastname,
      role: role,
      email: email,
      password: password,
    })
      .then(function (data) {
        window.location.replace("/home");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});

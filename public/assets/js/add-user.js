$(document).ready(function () {
  // Getting references to our form and input
  const userForm = $("form.new-user");
  const firstNameInput = $("#addFirstName");
  const lastNameInput = $("#addLastName");
  const roleInput = $("#addRole");
  const emailInput = $("#addEmail");
  // When the signup button is clicked, we validate the email and password are not blank
  userForm.on("submit", function (event) {
    event.preventDefault();
    
    var userData = {
      firstname: firstNameInput.val().trim(),
      lastname: lastNameInput.val().trim(),
      role: roleInput.val().trim(),
      email: emailInput.val().trim(),
    };

    if (
      !userData.firstname ||
      !userData.lastname ||
      !userData.role ||
      !userData.email
    ) {
      return;
    }

    // If we have an email and password, run the newUser function
    addUser(
      userData.firstname,
      userData.lastname,
      userData.role,
      userData.email
    );

    
  });
  function addUser(firstname, lastname, role, email) {
    $.post("/api/user", {
      firstname: firstname,
      lastname: lastname,
      role: role,
      email: email,
    })
      .then(function (data) {
        window.location.replace("/team");
      })
      .catch(handleLoginErr);
  }
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

});
// Restrict routes if a user is not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
    }
  
    // Redirect them to the login page if not logged in
    return res.redirect("/");
  };
  
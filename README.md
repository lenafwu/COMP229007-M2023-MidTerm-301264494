# COMP229.M2023.Midterm.Template

COMP229.M2023 - Midterm
Course name: Web Application Development
Student name: Fengting Wu
Student number: 301264494
Date: June 20, 2023

Project URL:
https://comp229007-m2023-midterm-301264494.lenafwu.repl.co/
Note: website could be slow to load due to free repl.it account

Test account:
Username: admin74
Password: 12345678

6-20 Known issue:

1. Cars drop down menu doesn't show:
   Problem: popper.js not included
   Fixed: footer.ejs: include bootstrap.bundle.min.js instead of bootstrap.min.js
   Reference: https://stackoverflow.com/questions/68750341/bootstrap-5-uncaught-typeerror-popper-namespace-createpopper-is-not-a-functi

2. Sign up not working
   Problem: MongooseError: Model.prototype.save() no longer accepts a callback
   Fixed: controllers/user.js: updated to async function

3. Sign out not working
   Problem: Error: req#logout requires a callback function
   at req.logout.req.logOut
   Fixed: controllers/user.js: updated
   Reference: https://stackoverflow.com/questions/72336177/error-reqlogout-requires-a-callback-function

# COMP229.M2023.Midterm.Template

COMP229.M2023 - Midterm Template

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

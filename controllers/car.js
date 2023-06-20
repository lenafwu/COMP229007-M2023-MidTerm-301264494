// create a reference to the model
let CarModel = require("../models/car");

// Gets all cars from the Database and renders the page to list them all.
module.exports.carList = async function (req, res, next) {
  try {
    let carsList = await CarModel.find({});

    res.render("cars/list", {
      title: "Cars List",
      CarsList: carsList,
      userName: req.user ? req.user.username : "",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Gets a car by id and renders the details page.
module.exports.details = async (req, res, next) => {
  try {
    let id = req.params.id;

    let carToShow = await CarModel.findById(id);

    res.render("cars/details", {
      title: "Car Details",
      car: carToShow,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
  // TODO: ADD YOUR CODE HERE
  res.render("cars/add_edit", {
    title: "Add a new Car",
    car: {
      make: "",
      model: "",
      year: "",
      kilometers: "",
      doors: "",
      seats: "",
      color: "",
      price: "",
    },
    userName: req.user ? req.user.username : "",
  });
};

// Processes the data submitted from the Add form to create a new car
module.exports.processAddPage = async (req, res, next) => {
  // TODO:  ADD YOUR CODE HERE
  let { make, model, year, kilometers, doors, seats, color, price } = req.body;
  try {
    let newCar = await new CarModel({
      make,
      model,
      year,
      kilometers,
      doors,
      seats,
      color,
      price,
    }).save();
    res.redirect("/cars/list");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Gets a car by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = async (req, res, next) => {
  // TODO: ADD YOUR CODE HERE
  let id = req.params.id;
  try {
    let carToEdit = await CarModel.findById(id);
    res.render("cars/add_edit", {
      title: "Edit Car",
      car: carToEdit,
      userName: req.user ? req.user.username : "",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Processes the data submitted from the Edit form to update a car
module.exports.processEditPage = async (req, res, next) => {
  // TODO: ADD YOUR CODE HERE
  let id = req.params.id;
  let { make, model, year, kilometers, doors, seats, color, price } = req.body;
  try {
    let carToEdit = await CarModel.findById(id);
    if (carToEdit) {
      carToEdit.make = make;
      carToEdit.model = model;
      carToEdit.year = year;
      carToEdit.kilometers = kilometers;
      carToEdit.doors = doors;
      carToEdit.seats = seats;
      carToEdit.color = color;
      carToEdit.price = price;
      await carToEdit.save();
      res.redirect("/cars/list");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Deletes a car based on its id.
module.exports.performDelete = async (req, res, next) => {
  // TODO: ADD YOUR CODE HERE
  let id = req.params.id;
  try {
    let carToDelete = await CarModel.findByIdAndDelete(id);
    res.redirect("/cars/list");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

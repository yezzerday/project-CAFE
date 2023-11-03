const UserAuthenController = require("./controllers/UserAuthenController");
const UserController = require("./controllers/UserController");
const isAuthensController = require("./authen/isAuthenController");
const MenuController = require("./controllers/MenuController");

module.exports = (app) => {
  // get user/menu by id
  app.get("/users", UserController.index, UserController.index);
  app.get("/menus", MenuController.index);
  // create user/menu
  app.post("/user", UserController.create);
  app.post("/menu", MenuController.create);
  // edit user/menu
  app.put("/user/:userId", UserController.put);
  app.put("/menu/:menuId", MenuController.put);
  // delete user/menu
  app.delete("/user/:userId", UserController.delete);
  app.delete("/menu/:menuId", MenuController.delete);
  // get all user/menu
  app.get("/user/:userId", UserController.show);
  app.get("/menu/:menuId", MenuController.show);
  // login
  app.post("/login", UserAuthenController.login);
};

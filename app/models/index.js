const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

db.url = dbConfig.url;
db.HOST = dbConfig.HOST;
db.PORT = dbConfig.PORT;
db.DB = dbConfig.DB;

db.user = require("./user.model");
db.role = require("./role.model");

db.ROLES = ["user", "admin", "moderator"];

db.employees = require("./employee.model.js")(mongoose);

module.exports = db;

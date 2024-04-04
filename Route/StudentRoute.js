const route = require("express").Router();
const {
  getdata,
  postdata,
  deletdata,
  putdata,
} = require("../Controller/StudentController");

route.get("/", getdata);
route.post("/", postdata);
route.put("/:id", putdata);
route.delete("/:id", deletdata);

module.exports = route;

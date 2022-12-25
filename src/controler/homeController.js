import connection from "../configs/connectDB";
import { mutipleMysqlToObject } from "../utils";

class HomeController {
  // [get] /
  getHomePage(req, res, next) {
    // simple query
    connection.query("SELECT * FROM `users`", function (err, results, fields) {
      if (err) {
        console.log(err);
        res.status(500).json({ error: err });
      }

      res.render("index", { data: JSON.stringify(results) });
    });
  }
}

export default new HomeController();

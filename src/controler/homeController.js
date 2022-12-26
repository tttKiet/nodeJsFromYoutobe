import pool from "../configs/connectDB";

class HomeController {
  // [get] /
  async getHomePage(req, res, next) {
    // simple query
    try {
      const [rows, fields] = await pool.execute("SELECT * FROM users");
      res.render("index", { dataUsers: rows });
      console.log("Into Home page success!");
    } catch (error) {
      return next(error);
    }
  }
}

export default new HomeController();

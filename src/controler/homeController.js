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

  // [get] /detail/user/:userId
  async getDetailPage(req, res, next) {
    let id = req.params.id;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ?`, [id]);

    res.json(user);
  }
}

export default new HomeController();

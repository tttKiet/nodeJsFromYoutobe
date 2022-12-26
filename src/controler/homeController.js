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

  // [get] /create-new-user
  async createNewUser(req, res, next) {
    let user = req.body;
    await pool.execute(
      `insert into users(firstName, lastName, email,address) values(?,?,?,?)`,
      [user.firstName, user.lastName, user.email, user.address]
    );
    res.redirect("/");
  }
}

export default new HomeController();

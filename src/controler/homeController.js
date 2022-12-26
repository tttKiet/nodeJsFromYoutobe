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

  // [delete] /delete-user/:id
  async deleteUser(req, res, next) {
    let userId = req.params.id;
    await pool.execute(`delete from users where id = ?`, [userId]);
    res.redirect("back");
  }

  // [get] /edit-user/:id
  async getEditUser(req, res, next) {
    let userId = req.params.id;
    const [user] = await pool.execute(`select * from users where id =?`, [
      userId,
    ]);

    res.render("update", { dataUser: user[0], id: userId });
  }

  // [post] /update-user/:id
  async updateUser(req, res, next) {
    let userId = req.params.id;
    const { firstName, lastName, email, address } = req.body;

    await pool.execute(
      `update users set users.firstName = ?, users.lastName = ?, users.email = ?, users.address = ? 
      where users.id = ?`,
      [firstName, lastName, email, address, userId]
    );

    res.redirect("/");
  }
}

export default new HomeController();

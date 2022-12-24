class HomeController {
  // [get] /
  getHomePage(req, res, next) {
    res.render("index");
  }
}

export default new HomeController();

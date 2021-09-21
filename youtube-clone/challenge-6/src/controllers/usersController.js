export const join = (req, res) => res.render("join", { pageTitle: "join" });
export const login = (req, res) => res.render("login", { pageTitle: "login" });
export const seeUsers = (req, res) =>
  res.render("see-users", { pageTitle: "see users" });
export const seeUser = (req, res) =>
  res.render("see-user", { pageTitle: "see user", id: req.params.id });
export const editProfile = (req, res) =>
  res.render("edit-profile", { pageTitle: "edit profile" });

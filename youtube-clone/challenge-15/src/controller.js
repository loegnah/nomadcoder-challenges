import fs from "fs";
export const getHome = (req, res) => {
  return res.render("home");
};

export const postRead = (req, res) => {
  if (!req.file) return res.redirect("/");

  const { path: fileUrl } = req.file;
  if (!fileUrl) return res.redirect("/");

  console.log("aaaaaaa");
  fs.readFile(fileUrl, (err, data) => {
    if (err) {
      console.log("err: ", err);
      return res.redirect("/");
    }
    return res.render("read", { data });
  });
};

export const home = (req, res) => res.render("home", { pageTitle: "home" });
export const trending = (req, res) =>
  res.render("trending", { pageTitle: "trending" });
export const newStories = (req, res) =>
  res.render("new-stories", { pageTitle: "new stories" });
export const seeStory = (req, res) =>
  res.render("see-story", { pageTitle: "see story" });
export const editStory = (req, res) =>
  res.render("edit-story", { pageTitle: "edit story" });
export const deleteStory = (req, res) =>
  res.render("delete-story", { pageTitle: "delete story" });

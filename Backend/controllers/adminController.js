const admin_index = (req, res) => {
  res.render("admin/index");
};

const admin_add = (req, res) => {
  res.render("admin/add");
};

const admin_add_post = (req, res) => {
  // Add logic here
  res.send("Admin add post request");
};

const admin_delete = (req, res) => {
  const { id } = req.params;
  // Delete logic here
  res.send(`Admin delete request for id ${id}`);
};

module.exports = {
  admin_index,
  admin_add,
  admin_add_post,
  admin_delete,
};

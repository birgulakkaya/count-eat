const express = require("express");
const router = express.Router();
const Blog = require("../Models/blog.js");

//! Get (Read All or by Search)
router.get("/", async (req, res) => {
  let { search, page = 1, limit = 9, category } = req.query;
  let filter = {};

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  if (category) {
    filter.category = category;
  }

  try {
    page = Number(page);
    limit = Number(limit);

    const totalBlogs = await Blog.countDocuments(filter);
    const blogs = await Blog.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({ blogs, totalBlogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

//! Get Single Blog by ID
router.get("/:blogId", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

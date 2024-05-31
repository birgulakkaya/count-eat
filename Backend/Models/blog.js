const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  published_date: { type: String, required: true }, // String olarak düzeltildi
  reading_time: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: Array, required: true },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;

import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import PropTypes from "prop-types";

const BlogCards = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
      {blogs.map((blog) => (
        <Link
          to={`/blog/${blog._id}`}
          key={blog._id}
          className="p-5 shadow-xl hover:shadow-2xl rounded cursor-pointer max-h-100"
        >
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-700 mb-4">
              {blog.description && blog.description.length > 100
                ? `${blog.description.substring(0, 100)}...`
                : blog.description}
            </p>
            <p className="mb-2 text-gray-600 flex items-center">
              <FaUser className="inline-flex items-center mr-2" />
              {blog.author}
            </p>
            <p className="text-sm text-gray-500">{blog.published_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

BlogCards.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      published_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogCards;

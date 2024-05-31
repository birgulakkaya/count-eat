import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const SideBar = () => {
  const [populerBlogs, setPopulerBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs?limit=15")
      .then((res) => res.json())
      .then((data) => setPopulerBlogs(data.blogs));
  }, []);

  return (
    <div>
      <div className="bg-green-700 text-slate-100 p-3 rounded-xl">
        <h3 className="text-2xl font-semibold px-16">Popüler Yazılarımız</h3>
        <div>
          {populerBlogs.slice(0, 5).map((blog) => (
            <div key={blog._id} className="my-5 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog._id}`}
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1 text-slate-100"
              >
                Daha Fazlası
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

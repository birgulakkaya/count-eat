import { useParams } from "react-router-dom";
import { FaUser, FaClock } from "react-icons/fa";
import { useEffect, useState } from "react";
import SideBar from "../Components/BlogComponents/BlogHomeItems/SideBar";

const SingleBlogPage = () => {
  const { id: blogId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/blogs/${blogId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchData();
  }, [blogId]);

  if (!data) return <div>Loading...</div>;

  const { title, image, author, published_date, reading_time, content } = data;

  return (
    <div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              style={{ width: "900px", height: "600px", marginRight: "150px" }}
              src={image}
              alt={title}
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="text-4xl mt-8 font-bold mb-4 text-green-700 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-xl mb-6">{content}</p>
        </div>
        <div className="lg:w-1/5">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;

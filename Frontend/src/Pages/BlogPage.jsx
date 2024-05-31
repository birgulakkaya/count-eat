import Banner from "../Components/BlogComponents/Banner/Banner";
import BlogHome from "../Components/BlogComponents/BlogHome";

const BlogPage = () => {
  return (
    <>
      <Banner />
      <div className="max-w-7x1 mx-auto">
        <BlogHome />
      </div>
    </>
  );
};

export default BlogPage;

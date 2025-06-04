import Postcard from "@/component/Postcard";
import Carousel from "@/component/Carousel";

const Home = () => {
  return (
    <div className="2xl:px-60 px-6 pt-10 pb-20">
      <div>
        <Carousel />
      </div>

      <div className="py-20">
        <h1 className="text-3xl font-semibold mb-5">Popular Post</h1>
        <div className="grid xl:grid-cols-2 gap-5">
          <Postcard />
        </div>
      </div>

    </div>
  );
};

export default Home;

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  const handleSummary = (summary, name) => {
    navigate("/summary", { state: { summary, name } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setDatas(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {datas?.map((data, id) => (
        <div className=" rounded-lg shadow-2xl" key={id}>
          {data.show.image?.original ? (
            <>
              <img
                className="h-[400px] w-full rounded-t-lg"
                src={data.show.image?.original}
                alt=""
              />
              <button
                onClick={() => handleSummary(data.show.summary)}
                className="my-5 btn btn-primary"
              >
                See Summary
              </button>
            </>
          ) : (
            <>
              <div className="h-[400px] flex justify-center items-center">
                <h3>Image Not Found</h3>
              </div>
              <button
                onClick={() => handleSummary(data.show.summary, data.show.name)}
                className="my-5 btn btn-primary"
              >
                See Summary
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;

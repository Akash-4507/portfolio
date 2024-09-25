import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Addcomp from "../components/Addcomp";
import Projectcard from "../components/Projectcard";
import { getProjects } from '../services/Api';

const Project = () => {
  const [projectData, setProjectdata] = useState(null);

  const fetchdata = async () => {
    try {
      const { data } = await getProjects();
      setProjectdata(data);
    } catch (error) {
      console.warn("error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-[#080b50] text-white flex flex-col items-center py-6">
        <div className="w-full flex justify-end px-10 mb-8">
          <button className="bg-white text-[#080b40] font-semibold py-2 px-4 rounded-md hover:bg-gray-200 transition">
            <Addcomp />
          </button>
        </div>
        <div className="w-[90%] flex flex-wrap justify-center gap-8">
          {projectData ? (
            projectData.map((data, index) => (
              <Projectcard
                title={data.title}
                desc={data.desc}
                pid={index}
                key={index}
                cover={data.cover}
                id={data.id}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;

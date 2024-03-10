import React from "react";
import Districts from "./Districts";

const Home = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">
        Welcome to Crime Prediction App
      </h2>
      <Districts />
    </div>
  );
};

export default Home;


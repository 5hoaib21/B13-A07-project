import React from "react";
import Dashboard from "./Dashboard";
import AllFriends from "../../components/Friends/Friends";
import Banner from "../../components/Banner/Banner";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Dashboard />
      <AllFriends />
    </div>
  );
};

export default HomePage;

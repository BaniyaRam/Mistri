import React from "react";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/Auth";
import { json } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title="Hamro Mistri">
      <div>
       <div className="img" >
        <img src="images/background.jpeg" alt="" className="bgimg" />
       </div>
      </div>
    </Layout>
  );
};

export default Home;

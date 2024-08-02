import * as React from "react";
import Appbar from "./Appbar";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { url } from "../global";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  let token = localStorage.getItem("token"); 

  async function getData() {
    try {
      let res = await axios.get(`${url}/movies/`, {
        headers: { Authorization: `Bearer ${token}` },
      });  
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        logout();
      } else {
        toast.error(error.response.data.message);
      }
    }
  }

  let logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  useEffect(() => {
    try {
      getData();
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error("Session Expired Login Again");
        logout();
      }
    }
  }, []);

  return (
    <div className="home-outer">
      <Appbar />
      <h1 className="Home-main">Welcome To The Movie Review App</h1>
    </div>
  );
} 


import React, { useState, useEffect } from "react";
import axios from "axios";
import U from "./Client.module.css";
import first from "../../images/Иконка Физ.png";
import second from "../../images/Иконка Юр.png";
import third from "../../images/Иконка Касса.png";
import { NavLink } from "react-router-dom";

const Client = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users_choice")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={U.section}>
      {data && (
        <div className={U.pics}> 
          <NavLink className={U.navlink} to={"/Services/FIZ"}>
            <img className={U.pic} src={first} alt="" />
            <h2 style={{ 
              padding: "30px 120px 0 0px"
          }}>{data[0].name}</h2>
          </NavLink>
          <NavLink className={U.navlink} to={"/Services/YUR"}>
            <img className={U.pic} src={second} alt="" />
            <h2 style={{ 
              padding: "30px 120px 0 0px"
          }}>{data[1].name}</h2>
          </NavLink>
          <NavLink className={U.navlink} to={"/Services/KASSA"}>
            <img className={U.pic} src={third} alt="" />
            <h2 style={{ 
              padding: "30px 120px 0 0px"
          }}>{data[2].name}</h2>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Client;


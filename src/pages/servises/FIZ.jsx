import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import S from "./Services.module.css";

const FIZ = () => {
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

  console.log("data:", data);

  
  const fizServices =
    data?.filter((category) => category.name === "Физические лица") || [];

  return (
    <div className={S.main}>
      <div className={S.category}>
        <h1>Выберите услугу</h1>
        {fizServices.map((category) => (
          <div key={category.id}>
            
            <NavLink to={"/Talon"} className={S.navLink}> 
            <ul>
              {category.services.map((service) => (
                <li key={service.id} className={S.serviceItem}>
                <p>{service.service_name}</p>
              </li>
              ))}
            </ul>
            </NavLink>
          </div>
        ))}
        <NavLink to={"/"}>
          <button className={S.button}>Вернуться на главную</button>
        </NavLink>
      </div>
    </div>
  );
};

export default FIZ;










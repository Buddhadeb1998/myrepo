import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate=useNavigate()
  return (
    <>
      <div className="container bg-dark text-primary">
        <header>Home Component</header>
      </div>
      <div>
        <fieldset>
          <legend>About our Course</legend>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            facilis excepturi doloremque ducimus doloribus ea laboriosam animi
            molestias saepe dignissimos ullam quisquam quo quibusdam
            necessitatibus reprehenderit, nulla quam impedit nostrum!
          </p>
          <button className="btn btn-danger ms-4"
          onClick={()=>Navigate("/course")}>
          course
          </button>
          <button className="btn btn-primary ms-4"
          onClick={()=>Navigate('/about')}>About
          </button>
          <button className="btn btn-warning ms-4"
          onClick={()=>Navigate(-1)}>goback
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import ArrayOfDoc from "./ArrayOfDoc";
function DocDetails() {
  return (
    <>
      {ArrayOfDoc.map((data, index) => (
        <div className="col-md-3">
          <div className="card my-2 bg-dark">
            <Link to={`/doctorprofile/${data.id}`}>
              <img src={data.image} alt="" />
              <div className="card-body">
                <p>ID : {data.id}</p>
                <p>{data.name}</p>
                <p>{data.age} Years</p>
                <p>{data.speciailty}</p>
                <p>{data.email}</p>
                <p>{data.fee}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default DocDetails;

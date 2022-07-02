import React from "react";
import { Outlet, useParams, useNavigate, Link } from "react-router-dom";

import ArrayOfDoc from "../docDetails/ArrayOfDoc";

const DoctorDetails = ({ data }) => {
  let navigate = useNavigate();

  console.log(data);
  const { id } = useParams();
  console.log(id + "saloo");
  console.log(ArrayOfDoc + "dddd");

  const doctorData = ArrayOfDoc.filter((item) => item.id == id);
  console.log(doctorData + "llolo");

  const changehandler = () => {
    navigate("/signup");
  };
  return (
    <div className="greenCard">
      <div className="courseDetails2">
        <div className="container mt-5 text-light doc-card">
          <div className="row my-2 ">
            {doctorData.map((data, index) => (
              <div className="col-md-6">
                <h1 className="text-dark">{data.speciailty}</h1>
                <div className="card my-2 bg-dark">
                  <Link to={`/doctorprofile/${data.id}`}>
                    <img src={data.image} alt="" />
                    <div className="card-body">
                      <p>ID : {data.id}</p>
                      <p>Name : {data.name}</p>
                      <p>Age : {data.age} Years</p>
                      <p>Specialist : {data.speciailty}</p>
                      <p>Email : {data.email}</p>
                      <p>Fee : {data.fee}</p>
                    </div>
                  </Link>
                  <button
                    className="btn btn-success"
                    onClick={changehandler}
                    style={{ width: "100%", padding: "30px  35px" }}
                  >
                    {" "}
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ))} */}
      </div>
    </div>
  );
};
<Outlet />;

export default DoctorDetails;

import React from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './DoctorProfile.css'

function DoctorProfile() {
  const doctor = [
    {
      id: 1,
      name: "Ali",
      age: "40",
      speciailty: "Neurologist",
      email: "ali@gmail.com",
      fee: "2000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 2,
      name: "Akbar",
      age: "45",
      speciailty: "Neurologist",
      email: "akbar@gmail.com",
      fee: "3000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 3,
      name: "Afzal",
      age: "42",
      speciailty: "Neurologist",
      email: "afzal@gmail.com",
      fee: "1000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 4,
      name: "Ahmed",
      age: "38",
      speciailty: "Neurologist",
      email: "ahmed@gmail.com",
      fee: "1500",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 5,
      name: "Zeheem",
      age: "52",
      speciailty: "Psychiatrist",
      email: "reheem@gmail.com",
      fee: "2000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 6,
      name: "Zafar",
      age: "49",
      speciailty: "Psychiatrist",
      email: "zafar@gmail.com",
      fee: "2000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 7,
      name: "hamza",
      age: "42",
      speciailty: "Psychiatrist",
      email: "hamza@gmail.com",
      fee: "1000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 8,
      name: "Bashir",
      age: "38",
      speciailty: "Endocrinologist",
      email: "bashir@gmail.com",
      fee: "1500",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 9,
      name: "Shokat",
      age: "52",
      speciailty: "Endocrinologist",
      email: "shokat@gmail.com",
      fee: "2000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
    {
      id: 10,
      name: "Shakeel",
      age: "49",
      speciailty: "Endocrinologist",
      email: "shah@gmail.com",
      fee: "2000",
      image: "https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?s=612x612"
    },
  ];

  return (
    <div>
      <div className="doctor">
        <h1 className="text-center mt-5">Doctors Profile</h1>
      </div>
      <div className="container mt-5 text-light doc-card">
        <div className="row my-2 ">
          {doctor.map((data, index) => (
            <div className="col-md-3">
              <div className="card my-2 bg-dark">
                <Link to={`/doctorprofile/${data.id}`}>
                <img src={data.image} alt=""  />
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
        </div>
      </div>
    
    </div>
  
  );
}


export default DoctorProfile;

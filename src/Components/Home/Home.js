import React from "react";
import { useState, useEffect } from "react";


const Home = () => {
  const [mydata, setMyData] = useState([]);

  useEffect(() => {
    fetch(
      "https://reactproject-ab89c-default-rtdb.firebaseio.com/userDataRecords.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const array = [];
        for (const key in data) {
          const user = data[key];
          array.push(user);
        }
        setMyData(array);
    
      });
  });
  return (
    <>
    <div className="container my-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr className="text-center">
            <td>FirstName</td>
            <td>LastName</td>
            <td>Email</td>
            <td>password</td>
            <td>Confirm Password</td>
          </tr>
        </thead>
        <tbody>
          
            {mydata.map((data) => {
              return (
                <>
                <tr className="text-center">
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.confirmPassword}</td>
                  </tr>
                </>
              );
            })}
         
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Home;


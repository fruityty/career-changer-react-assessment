import "./Home.css";
import React from "react";
import { useState, useEffect } from "react";

const Home = () => {
  const [mockEmployees, setMockEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer",
    },
  ]);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState({
    id: 99,
    name: name,
    lastname: lastname,
    position: position,
  });

  useEffect(() => {
    
  }, [employees, mockEmployees]);

  const handleUser = () => {
    setSector("user");
  };

  const handleAdmin = () => {
    setSector("admin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      id: mockEmployees.length,
      name: name,
      lastname: lastname,
      position: position,
    };
  
    setMockEmployees((prev) => [...prev, newEmployee]);
  };

  return (
    <div className="headline">
      <h2>Generation Thailand</h2>
      {sector === "admin" ? (
        <h2> Home - Admin Sector</h2>
      ) : sector === "user" ? (
        <h2> Home - User Sector</h2>
      ) : (
        <h2> React - Assessment</h2>
      )}

      <div id="divbutton">
        <button className="button" onClick={handleUser}>
          User Home Sector
        </button>
        <button className="button" onClick={handleAdmin}>
          Admin Home Sector
        </button>
      </div>

      {sector === "admin" ? (
        <Adminfeed
          mockEmployees={mockEmployees}
          employees={employees}
          setEmployees={setEmployees}
          name={name}
          setName={setName}
          lastname={lastname}
          setLastname={setLastname}
          position={position}
          setPosition={setPosition}
          handleSubmit={handleSubmit}
          setMockEmployees={setMockEmployees}
        />
      ) : sector === "user" ? (
        <Userfeed mockEmployees={mockEmployees} />
      ) : (
        <Otherfeed />
      )}
    </div>
  );
};

const Userfeed = ({ mockEmployees }) => {
  return (
    <div className="userfeed">
      <table className="table" id="tableUser">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Adminfeed = ({
  mockEmployees,
  handleSubmit,
  name,
  setName,
  lastname,
  setLastname,
  position,
  setPosition,
  setMockEmployees
}) => {

  const handleDelete = (index) => {
    // Create a copy of the mockEmployees array
    const updatedMockEmployees = [...mockEmployees];
    
    // Remove the employee at the specified index
    updatedMockEmployees.splice(index, 1);

    // Update the state with the modified array
    setMockEmployees(updatedMockEmployees);
  };

  useEffect(() => {
    // console.log("Mock Employees Updated:", mockEmployees);
  }, [mockEmployees]);

  return (
    <div className="adminfeed">
      <h3>Create User Here</h3>
      <form className="create form">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="name"
          placeholder="Name"
          required
        />

        <label htmlFor="lastname"></label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          name="lastname"
          placeholder="Last Name"
          required
        />

        <label htmlFor="position"></label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          name="position"
          placeholder="Position"
          required
        />

        <button id='save' type="submit" onClick={handleSubmit}>
          Save
        </button>
      </form>

      <table className="table" id="tableAdmmin">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.lastname}</td>
              <td>{employee.position}</td>
              <td><span
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Otherfeed = () => {
  return <div></div>;
};

export default Home;

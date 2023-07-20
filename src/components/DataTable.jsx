import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DataTableInstance from "../uitils/DataTableUtils";
import imageUrls from '../assets/ImgaeUrls';
import './userStyles.css'

const DataTable = (props) => {
  const table = props.table;
  const location = useLocation();
  const [adminAccess, setAdminAccess] = useState(false);
  const username = localStorage.getItem('username');
  const imageUrls = "imageUrl: 'https://picsum.photos/"

  const blogUsers =[
    {
       id: 1,
      username: "Bret",
      adminUser: "Yes",
    },
    {
      id: 2,
      username: "Antonette",
      adminUser: "No",
    },
    {
      id: 3,
      username: "Samantha",
      adminUser: "No",
    },
    {
      id: 4,
      username: "Karianne",
      adminUser: "No",
    },
    {
      id: 5,
      username: "Kamren",
      adminUser: "No",
    },
    {
      id: 6,
      username: "Leopoldo_Corkery",
      adminUser: "No",
    },
    {
      id: 7,
      username: "Elwyn.Skiles",
      adminUser: "Yes",
    },
    {
      id: 8,
      username: "Maxime_Nienow",
      adminUser: "No",
    },
    {
      id: 9,
      username: "Delphine",
      adminUser: "Yes",
    },
    {
      id: 10,
      username: "Moriah.Stanton",
      adminUser: "No",
    }
  ];

  useEffect(() => {
    console.log("FilterAdminUser Called")
    filterAdminAccessUser();
  }, []);

  const filterAdminAccessUser = () => {
    console.log("AdminUserFilter Called")
    const adminUser = blogUsers.filter((user) => user.username === username)
    if(adminUser[0].adminUser === 'Yes') {
      setAdminAccess(true);
    } else {
      setAdminAccess(false);
    }
  }

  return (
    <div className="scrollbar">
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            {table.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            {/* <th>User Profile</th> */}
            {table.showActionColumn ? <th>Action</th> : ""}
          </tr>
        </thead>
        <tbody>
          {table.data?.entities?.map((eachData,i) => (
            <tr key={eachData?.id}>
              {table.data?.entityKeys?.map((property, index) => (
                <td key={index}>{eachData[property]}</td>
              ))}
              {/* <td>
                  <img className="imageStyles"src='https://picsum.photos/300'/>
                
              </td> */}
              <td>
                {table.actions.map((action, index) => {
                  return action.actionType ===
                    DataTableInstance.DELETE_ACTION && adminAccess ? (
                    <button
                      className="btn-border-less"
                      data-bs-toggle="modal"
                      data-bs-target="#targetModal"
                      key={index}
                    >
                      <i
                        table-data={eachData.id}
                        onClick={action.actionHandaler}
                        className={action.actionClasses}
                        aria-hidden="true"
                      ></i>
                    </button>
                  ) : (
                    <NavLink
                      to={
                        action.actionType === DataTableInstance.VIEW_ACTION
                          ? `${location.pathname}/${eachData.id}`
                          : `${location.pathname}/${eachData.id}/edit`
                      }
                      key={index}
                    >
                      <i
                        className={action.actionClasses}
                        aria-hidden="true"
                      ></i>
                    </NavLink>
                  );
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

DataTable.propTypes = {
  table: PropTypes.instanceOf(DataTableInstance).isRequired,
};
